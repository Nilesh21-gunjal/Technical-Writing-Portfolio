import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const swaggerSourceDirectory = path.join(repositoryRoot, "node_modules", "swagger-ui-dist");
const swaggerDestinationDirectory = path.join(
  repositoryRoot,
  "API-Documentation",
  "docs",
  "assets",
  "swagger-ui",
);
const swaggerFiles = ["swagger-ui.css", "swagger-ui-bundle.js"];

if (!fs.existsSync(swaggerSourceDirectory)) {
  throw new Error("swagger-ui-dist is missing. Run pnpm install before building API documentation.");
}

fs.mkdirSync(swaggerDestinationDirectory, { recursive: true });
for (const fileName of swaggerFiles) {
  fs.copyFileSync(
    path.join(swaggerSourceDirectory, fileName),
    path.join(swaggerDestinationDirectory, fileName),
  );
}

const python = process.env.PYTHON || "python";
execFileSync(
  python,
  ["-m", "mkdocs", "build", "--strict", "--config-file", "API-Documentation/mkdocs.yml"],
  { cwd: repositoryRoot, stdio: "inherit" },
);
