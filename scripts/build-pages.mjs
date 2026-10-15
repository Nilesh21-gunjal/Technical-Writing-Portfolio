import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const siteDirectory = path.join(repositoryRoot, "site");
const apiBuildDirectory = path.join(repositoryRoot, "site-api");
const publicRoots = ["index.html", "assets", "work", "output"];

const trackedFiles = new Set(
  execFileSync("git", ["ls-files", "-z"], { cwd: repositoryRoot, encoding: "buffer" })
    .toString("utf8")
    .split("\0")
    .filter(Boolean),
);

function copyTrackedEntry(relativePath) {
  const sourcePath = path.join(repositoryRoot, relativePath);
  const destinationPath = path.join(siteDirectory, relativePath);
  const sourceStats = fs.statSync(sourcePath);

  if (sourceStats.isDirectory()) {
    for (const entry of fs.readdirSync(sourcePath)) {
      copyTrackedEntry(path.join(relativePath, entry));
    }
    return;
  }

  const normalizedPath = relativePath.split(path.sep).join("/");
  if (!trackedFiles.has(normalizedPath)) return;

  fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
  fs.copyFileSync(sourcePath, destinationPath);
}

if (!fs.existsSync(apiBuildDirectory)) {
  throw new Error("API documentation build output is missing. Run pnpm build:api-docs before pnpm build:site.");
}

fs.rmSync(siteDirectory, { recursive: true, force: true });
fs.mkdirSync(siteDirectory, { recursive: true });

for (const relativePath of publicRoots) {
  const sourcePath = path.join(repositoryRoot, relativePath);
  if (fs.existsSync(sourcePath)) copyTrackedEntry(relativePath);
}

fs.cpSync(apiBuildDirectory, path.join(siteDirectory, "API-Documentation"), { recursive: true });
fs.copyFileSync(
  path.join(repositoryRoot, "API-Documentation", "openapi.yaml"),
  path.join(siteDirectory, "API-Documentation", "openapi.yaml"),
);
fs.writeFileSync(path.join(siteDirectory, ".nojekyll"), "");

console.log("Built GitHub Pages output in site/ using tracked public files and generated API documentation.");
