// Prerenders the 4 real routes to static HTML after `vite build`, so
// crawlers/bots that don't execute JS (and the first pass of ones that do)
// get real content instead of an empty <div id="root">. React still
// hydrates over this markup for real users -- this doesn't change any
// component, it just captures what the client already renders and writes
// it back to disk.
//
// Runs automatically via the "postbuild" npm script.

import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, copyFile, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const port = 4173;
const baseUrl = `http://localhost:${port}`;

const routes = [
  { path: "/", out: "index.html" },
  { path: "/services", out: "services/index.html" },
  { path: "/projects", out: "projects/index.html" },
  { path: "/contact", out: "contact/index.html" },
];

// Prefer the pre-installed browser this environment already has (avoids a
// browser download); fall back to Playwright's own resolution elsewhere.
const CHROMIUM_PATH = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        /* not ready yet */
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Server didn't come up at ${url}`));
      }
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(port), "--strictPort"],
    { cwd: root, stdio: "ignore" },
  );

  const launchOpts = { args: ["--no-sandbox"] };
  try {
    await readFile(CHROMIUM_PATH);
    launchOpts.executablePath = CHROMIUM_PATH;
  } catch {
    /* not present in this environment -- let Playwright resolve its own */
  }

  let captured;
  try {
    await waitForServer(baseUrl);
    const browser = await chromium.launch(launchOpts);
    const page = await browser.newPage();

    captured = [];
    for (const route of routes) {
      await page.goto(baseUrl + route.path, { waitUntil: "networkidle" });
      // Let the Seo component's effect and the entrance animations settle.
      await page.waitForTimeout(800);
      const html = await page.content();
      captured.push({ ...route, html });
      console.log(`captured ${route.path} (${(html.length / 1024).toFixed(0)} KB)`);
    }
    await browser.close();
  } finally {
    preview.kill();
  }

  // Keep a pristine, un-prerendered shell for genuinely unmatched paths --
  // the client router's NotFound page renders once its JS loads.
  await copyFile(
    path.join(distDir, "index.html"),
    path.join(distDir, "app-shell.html"),
  );

  for (const { out, html } of captured) {
    const dest = path.join(distDir, out);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, html);
  }

  console.log("Prerendering done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
