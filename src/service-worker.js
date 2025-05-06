/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

// Précache tous les actifs générés par votre processus de construction webpack.
precacheAndRoute(self.__WB_MANIFEST);

// Gestion de la navigation SPA pour tout URL qui correspond à index.html
// https://developers.google.com/web/tools/workbox/modules/workbox-routing
// https://developers.google.com/web/tools/workbox/modules/workbox-precaching
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Retourne false pour les URLs qui se terminent par une extension de fichier
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Cache les images avec une stratégie de cache-first
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 jours
      }),
    ],
  })
);

// Cache les ressources statiques avec une stratégie de cache-first
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Ce code écoute les événements push
self.addEventListener('push', (event) => {
  let title = 'Notification';
  let options = {
    body: 'Nouvelle notification reçue',
    icon: 'logo192.png',
  };

  try {
    if (event.data) {
      // Essayez de traiter les données comme JSON, mais prévoyez une alternative
      try {
        const data = event.data.json();
        title = data.title || 'Notification';
        options.body = data.body || 'Nouvelle notification reçue';
      } catch (e) {
        // Si ce n'est pas du JSON, utilisez le texte brut
        title = 'Notification';
        options.body = event.data.text();
      }
    }
  } catch (err) {
    console.error('Erreur lors du traitement de la notification push:', err);
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Ce code aide avec les mises à jour du service worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});