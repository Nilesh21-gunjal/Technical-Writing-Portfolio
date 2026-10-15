import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "../..");
const targetDirectory = process.argv[2]
  ? path.resolve(repositoryRoot, process.argv[2])
  : repositoryRoot;
const htmlFiles = [];

function collectHtmlFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!process.argv[2] && [".git", "node_modules", "site", "site-api", ".venv"].includes(entry.name)) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(entryPath);
    else if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(entryPath);
  }
}

if (!fs.existsSync(targetDirectory)) {
  console.error(`Accessibility target does not exist: ${targetDirectory}`);
  process.exit(1);
}

collectHtmlFiles(targetDirectory);
const errors = [];

for (const filePath of htmlFiles) {
  const relativePath = path.relative(targetDirectory, filePath) || path.basename(filePath);
  const source = fs.readFileSync(filePath, "utf8");
  const h1Count = (source.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) errors.push(`${relativePath}: expected exactly one h1, found ${h1Count}`);

  const headings = [...source.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  for (let index = 1; index < headings.length; index += 1) {
    if (headings[index] > headings[index - 1] + 1) {
      errors.push(`${relativePath}: heading level jumps from h${headings[index - 1]} to h${headings[index]}`);
    }
  }

  for (const imageTag of source.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=\s*["'][^"']*["']/i.test(imageTag[0])) {
      errors.push(`${relativePath}: image is missing an alt attribute`);
    }
  }

  if (!/<meta\s+name=["']viewport["']/i.test(source)) {
    errors.push(`${relativePath}: missing viewport metadata`);
  }
}

const sharedStylesheet = path.join(targetDirectory, "assets", "portfolio.css");
if (fs.existsSync(sharedStylesheet)) {
  const stylesheet = fs.readFileSync(sharedStylesheet, "utf8");
  if (!/:focus-visible/.test(stylesheet)) errors.push("assets/portfolio.css: missing visible focus styles");
  if (!/prefers-reduced-motion/.test(stylesheet)) errors.push("assets/portfolio.css: missing reduced-motion handling");
}

const apiStylesheet = path.join(targetDirectory, "API-Documentation", "assets", "stylesheets", "portfolio-api.css");
if (fs.existsSync(apiStylesheet)) {
  const stylesheet = fs.readFileSync(apiStylesheet, "utf8");
  if (!/:focus-visible/.test(stylesheet)) errors.push("API-Documentation/assets/stylesheets/portfolio-api.css: missing visible focus styles");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Accessibility essentials passed for ${htmlFiles.length} HTML pages in ${path.relative(repositoryRoot, targetDirectory) || "."}.`);
}
