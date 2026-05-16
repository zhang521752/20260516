const CACHE_NAME = 'comic-workbench-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
  // CDN资源不缓存（FFmpeg等太大，且需在线加载）
];

// 安装：预缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// 请求策略：
// - index.html 和静态资源：Cache First，fallback Network
// - CDN资源：Network Only（太大不适合缓存，且需最新版）
// - API请求：Network Only
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // CDN和API请求不缓存
  if (url.origin !== self.location.origin) {
    return;
  }
  
  // 同源静态资源：Cache First
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        // 缓存新获取的资源
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // 完全离线时返回index.html（SPA fallback）
      if (event.request.mode === 'navigate') {
        return caches.match('/index.html');
      }
    })
  );
});
