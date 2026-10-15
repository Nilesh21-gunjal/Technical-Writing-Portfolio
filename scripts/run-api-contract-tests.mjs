import { spawn, spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = "http://127.0.0.1:4010";
const isWindows = process.platform === "win32";
const binary = (name) => path.join(repositoryRoot, "node_modules", ".bin", isWindows ? `${name}.cmd` : name);

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: repositoryRoot,
    encoding: "utf8",
    shell: isWindows,
    env: { ...process.env, BASE_URL: baseUrl },
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed.\n${result.stdout}\n${result.stderr}`);
  }
}

async function waitForMock() {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/devices`);
      if (response.status < 500) return;
    } catch {
      // The mock is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error("Prism did not start within 30 seconds.");
}

const prism = spawn(binary("prism"), ["mock", "API-Documentation/openapi.yaml", "-h", "127.0.0.1", "-p", "4010", "--errors=false"], {
  cwd: repositoryRoot,
  shell: isWindows,
  env: process.env,
  stdio: ["ignore", "pipe", "pipe"],
});

try {
  await waitForMock();
  run(process.execPath, ["scripts/verify-api-contract.mjs"]);
  run(process.execPath, ["scripts/test-api-examples.mjs"]);
  run(binary("newman"), [
    "run",
    "API-Documentation/postman/device-operations.postman_collection.json",
    "--environment",
    "API-Documentation/postman/device-operations.postman_environment.json",
  ]);
  console.log("Prism contract checks, code samples, and Postman collection passed.");
} finally {
  prism.kill();
}
