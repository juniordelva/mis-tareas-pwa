self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("mis-tareas-v1").then(cache => {
        return cache.addAll([
          "./",
          "./index.html"
        ]);
      })
    );
  });
  