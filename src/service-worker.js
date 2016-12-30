const staticCacheVersion = 'webcv-static-0.0.1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    // Cache static files
    caches.open(staticCacheVersion).then(cache =>
      cache.addAll([
        '/',
        '/app.dist.js',
      ])
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Delete older cache versions
    caches.keys().then((cacheNames) => {
      Promise.all(
        cacheNames
        .filter(cacheName =>
          // Filter older webcv cache versions
          cacheName.startsWith('webcv-') &&
                 cacheName !== staticCacheVersion
        )
        .map(cacheName =>
          caches.delete(cacheName)
        )
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Respond static files with cache versions if possible
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
