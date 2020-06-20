self.addEventListener('install', function (event) {
        console.log('[Service Worker] Installing Service Worker ...', event);
    }
);

self.addEventListener('activate', function (event) {
        console.log('[Service Worker] Activating Service Worker ...', event);
        return self.clients.claim()
    //Clients 接口的  claim() 方法允许一个激活的 service worker 将自己设置为其 scope 内所有clients 的controller .
    // 这会在由此service worker 控制的任何 clients 中触发 navigator.serviceWorker  上的  "controllerchange"  事件.
    }
);

self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetching something ...', event);

});