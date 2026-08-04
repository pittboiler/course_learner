/* Learner PWA service worker.
   - App shell (HTML/JS/CSS) is NETWORK-FIRST: when you're online you always get the
     deployed code, so fixes land on the next load instead of lagging behind the cache.
     The cache is the offline fallback.
   - Lessons/assets use stale-while-revalidate: instant offline reads, and freshly
     /prep-generated lessons appear the next time you're online.
   - /api/* is NEVER cached — grading, quizzes and reviews always hit the network. */
const CACHE = "learner-v13";
const CODE = new Set(["/", "/app.js", "/styles.css", "/manifest.json"]); // network-first
const SHELL = [
  ...CODE,
  "/vendor/marked/marked.min.js",
  "/vendor/katex/katex.min.js",
  "/vendor/katex/katex.min.css",
  "/vendor/katex/contrib/auto-render.min.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      // addAll fails the whole install if any URL 404s, so cache individually
      .then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return; // network handles it
  if (url.pathname.startsWith("/api/")) return; // dynamic — never cache

  // Code (HTML navigations, app.js, styles.css, manifest): network-first so updates
  // always win when online; fall back to cache offline.
  if (req.mode === "navigate" || CODE.has(url.pathname)) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match("/")))
    );
    return;
  }

  // Everything else (lessons, assets, vendor libs): stale-while-revalidate.
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req);
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
