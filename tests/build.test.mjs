import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("build contains an installable static PWA", async () => {
  await Promise.all([
    access("dist/index.html"),
    access("dist/manifest.webmanifest"),
    access("dist/sw.js"),
    access("dist/pwa-192.png"),
    access("dist/pwa-512.png"),
  ]);

  const manifest = JSON.parse(await readFile("dist/manifest.webmanifest", "utf8"));
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.start_url, ".");
  assert.equal(manifest.scope, ".");
  assert.ok(manifest.icons.length >= 2);

  const html = await readFile("dist/index.html", "utf8");
  assert.match(html, /Open PWA Framework/);
  assert.match(html, /manifest\.webmanifest/);

  const assetFiles = await readdir("dist/assets");
  const scripts = await Promise.all(
    assetFiles
      .filter((file) => file.endsWith(".js"))
      .map((file) => readFile(`dist/assets/${file}`, "utf8")),
  );
  assert.match(scripts.join("\n"), /navigator\.serviceWorker\.register/);
});
