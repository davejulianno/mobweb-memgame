self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
          '/index.html',
          '/offline.html',
          '/src/js/app.js',
          '/manifest.json',
          '/src/images/card/1_of_spades.png',
          '/src/images/card/2_of_spades.png',
          '/src/images/card/3_of_spades.png',
          '/src/images/card/4_of_spades.png',
          '/src/images/card/5_of_spades.png',
          '/src/images/card/6_of_spades.png',
          '/src/images/card/7_of_spades.png',
          '/src/images/card/8_of_spades.png',
          '/src/images/card/9_of_spades.png',
          '/src/images/card/10_of_spades.png',
          '/src/images/card/14_of_hearts.png',
          '/src/images/bg.png',
          '/favicon.ico',
          'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css',
          'https://code.jquery.com/jquery-1.11.1.min.js',
          'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js'
          
        // etc
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});