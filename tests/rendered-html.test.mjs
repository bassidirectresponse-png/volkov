import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the VOLKOV home page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Independent Wellness Research — VOLKOV/);
  assert.match(html, /HEALTH,/);
  assert.match(html, /CLEARLY\./);
  assert.match(html, /VOLKOV LTDA/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders critical routes", async () => {
  for (const path of [
    "/about",
    "/wellness",
    "/standards",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/affiliate-disclosure",
    "/health-disclaimer",
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
  }
});

test("returns a branded not-found page", async () => {
  const response = await render("/this-page-does-not-exist");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /THIS PAGE IS OUT OF FRAME/);
});
