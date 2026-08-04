/* Learner PWA service worker.
   - App shell + vendor libs are precached so the app opens offline.
   - Lessons/assets use stale-while-revalidate: instant offline reads, and
     freshly /prep-generated lessons appear the next time you're online.
   - /api/* is NEVER cached — grading, quizzes and reviews always hit the network. */
const CACHE = "learner-v7";
const SHELL = [
  "/",
  "/app.js",
  "/styles.css",
  "/manifest.json",
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

  // Stale-while-revalidate: serve cache immediately, refresh in the background.
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
