// sw.js

const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
'/',
    'index.html',
    'styles.css',
    'script.js',
    'test.html',
    '/HTMLS/7habbit.html',
    '/HTMLS/albert.html',
    '/HTMLS/analogy-spelling.html',
    '/HTMLS/audio.html',
    '/HTMLS/ChatBot.html',
    '/HTMLS/clause.html',
    '/HTMLS/doit.html',
    '/HTMLS/Fact.html',
    '/HTMLS/gelilio.html',
    '/HTMLS/Gemini-Home.html',
    '/HTMLS/gemini.html',
    'HTMLS/gk.html',
    '/HTMLS/grammer.html',
    '/HTMLS/issac.html',
    '/HTMLS/L2.html',
    '/HTMLS/lalsalu.html',
    '/HTMLS/library.html',
    '/HTMLS/mail-system.html',
    '/HTMLS/masipisi.html',
    '/HTMLS/meri.html',
    '/HTMLS/more.html',
    '/HTMLS/morning.html',
    '/HTMLS/oporichita.html',
    '/HTMLS/phrase.html',
    // '/HTMLS/Practice.html',
    '/HTMLS/profile.html',
    '/HTMLS/proverb.html',
    '/HTMLS/richdad.html',
    '/HTMLS/quiz.html',
    '/HTMLS/riddle.html',
    '/HTMLS/seser.html',
    '/HTMLS/tense.html',
    '/HTMLS/updating.html',
    '/HTMLS/Vocabulary.html',
    '/HTMLS/Voice.html',
    '/HTMLS/voicee.html',
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch assets from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Handle background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// Function to sync data
async function syncData() {
  const cache = await caches.open(CACHE_NAME);
  const cachedData = await cache.match('/data-to-sync'); // Change to your specific endpoint

  if (cachedData) {
    const data = await cachedData.json();

    // Example: Send data to the server
    await fetch('/api/sync-endpoint', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Clear the synced data from the cache after syncing
    await cache.delete('/data-to-sync');
  }
}