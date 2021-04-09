addEventListener("fetch", (event) => {
  const response = new Response("Hello World! Deno!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
