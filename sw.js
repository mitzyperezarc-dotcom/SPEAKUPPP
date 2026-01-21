const CACHE_NAME = "speakupp-cache-v1";

// Lista de archivos que queremos guardar en el cache
const urlsToCache = [
  "index.html",
  "style.css",
  "scrip.js",
  "Logo.jpeg",
  "/basico/basico.html",
  "/intermedio/intermedio.html",
  "/avanzado/avanzado.html"
  // Agrega aquí todos los HTML de temas y ejercicios que tengas
];

// Instalación del Service Worker y cache inicial
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cacheando archivos...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Interceptar solicitudes y devolver archivos desde cache si es posible
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si está en cache, devuelve eso; si no, hace fetch normal
      return response || fetch(event.request);
    })
  );
});
