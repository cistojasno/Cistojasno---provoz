// Čistojasno — minimální service worker: jen umožní instalaci appky na plochu.
// Nic neukládá do mezipaměti, vše jde vždy čerstvě ze sítě.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
