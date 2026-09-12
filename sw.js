/* KCTI 2026 국정감사 대시보드 · Service Worker
 * v1.0.0 — 오프라인 캐싱 및 앱 설치 지원
 */
const CACHE_NAME = 'kcti-2026-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './KCTI_2026_국정감사.pdf',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap'
];

// Install — 핵심 자산 캐시
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS.map(u => new Request(u, {cache: 'reload'}))))
      .catch(err => console.warn('[SW] cache preload partial:', err))
      .then(() => self.skipWaiting())
  );
});

// Activate — 오래된 캐시 정리
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — 캐시 우선(SWR), 네트워크 fallback
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // HTML 문서는 네트워크 우선(최신 유지) + 실패 시 캐시
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // 정적 자산·CDN — 캐시 우선
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res.ok && (req.url.startsWith(self.location.origin) ||
                       req.url.startsWith('https://cdn.jsdelivr.net') ||
                       req.url.startsWith('https://fonts.'))) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
