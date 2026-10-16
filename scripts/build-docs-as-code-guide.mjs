import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const localPython = process.platform === "win32"
  ? path.join(repositoryRoot, ".venv", "Scripts", "python.exe")
  : path.join(repositoryRoot, ".venv", "bin", "python");
const python = process.env.PYTHON || (fs.existsSync(localPython) ? localPython : "python");

execFileSync(
  python,
  ["-m", "mkdocs", "build", "--strict", "--config-file", "docs-as-code-guide/mkdocs.yml"],
  { cwd: repositoryRoot, stdio: "inherit" },
);
