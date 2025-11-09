// service-worker.js
const CACHE_NAME = 'ecun-absensi-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Tambahkan file lain jika ingin cache offline
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});