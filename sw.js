// Papiro V6: nueva versión para invalidar la caché anterior y cargar las imágenes nuevas.
const CACHE_NAME = 'papiro-v6';
const CORE = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './biblioteca-praga.jpg', './biblioteca-alejandria.jpg', './biblioteca-san-francisco.jpg',
  './biblioteca-alejandria-prestamos.jpg', './biblioteca-alejandria-atras.jpg'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
