
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('webcv-static-v1').then(cache =>
      cache.addAll([
        '/',
        '/app.dist.js',
      ])
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
