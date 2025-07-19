self.addEventListener('install', function(event) {
  console.log('Service Worker устанавливается.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker активируется.');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});