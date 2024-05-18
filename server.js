Bun.serve({
  port: 7000,
  //   hostname: "helloworld.com",
  fetch(req) {
    return new Response("Hello this is bun server");
  },
});
