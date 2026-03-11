// Thoreson Estate Dinner — Service Worker
// Handles background notifications

const CACHE_VERSION = 'thoreson-v1';

self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(self.clients.claim());
});

// Listen for notification messages from the main page
self.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
        e.waitUntil(
            self.registration.showNotification(e.data.title, {
                body: e.data.body,
                icon: e.data.icon || '/Thoreson_Estate_Dinner/icon-192.png',
                badge: e.data.icon || '/Thoreson_Estate_Dinner/icon-192.png',
                tag: e.data.tag || 'thoreson-update',
                renotify: true,
                requireInteraction: false,
                silent: false
            })
        );
    }
});

// Clicking a notification brings the app to focus
self.addEventListener('notificationclick', function(e) {
    e.notification.close();
    e.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clients) {
            for (var i = 0; i < clients.length; i++) {
                if (clients[i].url.includes('Thoreson_Estate_Dinner') && 'focus' in clients[i]) {
                    return clients[i].focus();
                }
            }
            if (self.clients.openWindow) {
                return self.clients.openWindow('/Thoreson_Estate_Dinner/authenticated-dashboard.html');
            }
        })
    );
});
