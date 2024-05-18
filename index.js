import http from "http";
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  const urlpath = req.url;
  if (urlpath === "/getNames") {
    res.end(JSON.stringify({ Data: "Hello This is test data" }));
  }
});

server.listen(5000, () => console.log("Server up and running"));
