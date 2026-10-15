import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const examplesRoot = path.join(repositoryRoot, "API-Documentation", "examples");
const environment = {
  ...process.env,
  BASE_URL: process.env.BASE_URL || "http://127.0.0.1:4010",
  CLIENT_ID: process.env.CLIENT_ID || "demo-client",
  CLIENT_SECRET: process.env.CLIENT_SECRET || "demo-secret",
  ACCESS_TOKEN: process.env.ACCESS_TOKEN || "portfolio-demo-token",
  DEVICE_ID: process.env.DEVICE_ID || "DEV-2024-001842",
  ALERT_ID: process.env.ALERT_ID || "ALT-2026-000041",
  FROM_TIMESTAMP: process.env.FROM_TIMESTAMP || "2026-10-01T00:00:00Z",
  TO_TIMESTAMP: process.env.TO_TIMESTAMP || "2026-10-08T00:00:00Z",
};

const localGitBash = path.join(process.env.LOCALAPPDATA || "", "Programs", "Git", "bin", "bash.exe");
const executableFor = {
  curl: process.env.BASH || (existsSync(localGitBash) ? localGitBash : "bash"),
  python: process.env.PYTHON || "python",
  javascript: process.execPath,
};

const extensionFor = { curl: ".sh", python: ".py", javascript: ".mjs" };

for (const language of Object.keys(executableFor)) {
  const directory = path.join(examplesRoot, language);
  const files = readdirSync(directory).filter((file) => file.endsWith(extensionFor[language])).sort();
  for (const file of files) {
    const result = spawnSync(executableFor[language], [path.join(directory, file)], {
      cwd: repositoryRoot,
      env: environment,
      encoding: "utf8",
      shell: false,
    });
    if (result.status !== 0) {
      throw new Error(`${language}/${file} failed.\n${result.stdout}\n${result.stderr}`);
    }
  }
}

console.log("Executed all curl, Python, and JavaScript API examples against the local mock.");
