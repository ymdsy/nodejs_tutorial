const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
  res.end();
});
//   .listen(8080);

server.listen(8080, "127.0.0.1", () => {
  console.log("accessed!!");
});
