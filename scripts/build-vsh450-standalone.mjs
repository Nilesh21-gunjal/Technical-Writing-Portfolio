import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(repository, "work/vacuum-pump-service-manual/index.html");
const output = path.join(repository, "output/html/VSH450_Service_and_Maintenance_Manual_Rev_C.html");
const site = "https://nilesh21-gunjal.github.io/Technical-Writing-Portfolio/";

let html = fs.readFileSync(source, "utf8");
html = html.replace(/^  <link rel="icon".*\r?\n/m, "");
for (const name of ["portfolio", "vsh-450-manual"]) {
  const css = fs.readFileSync(path.join(repository, `assets/${name}.css`), "utf8");
  const link = new RegExp(`<link rel="stylesheet" href="\\.\\./\\.\\./assets/${name}\\.css\\?[^\"]+">`);
  if (!link.test(html)) throw new Error(`Missing stylesheet link: ${name}`);
  html = html.replace(link, `<style>\n${css}\n</style>`);
}
html = html.replaceAll('href="../../', `href="${site}`);
html = html.replaceAll('src="../../', `src="${site}`);
if (/href="\.\.\/|src="\.\.\//.test(html)) throw new Error("Unresolved relative asset path");
if ((html.match(/<svg\b/g) ?? []).length !== 17) throw new Error("Illustration inventory changed");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, html, "utf8");
console.log(`Built standalone VSH-450 manual: ${path.relative(repository, output)}`);
