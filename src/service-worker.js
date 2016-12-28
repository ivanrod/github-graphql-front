
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mysite-static-v3').then(cache =>
      cache.addAll([
        '/index.html',
        '/app.dist.js',
      ])
    )
  );
});
