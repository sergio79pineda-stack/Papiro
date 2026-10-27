const C = 'papiro-v2';
const ARCHIVOS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './biblioteca-alejandria.jpg', './biblioteca-san-francisco.jpg', './biblioteca-praga.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Red primero (para recibir actualizaciones); si no hay conexión, usa lo guardado.
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copia = r.clone();
      caches.open(C).then(c => c.put(e.request, copia));
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});
