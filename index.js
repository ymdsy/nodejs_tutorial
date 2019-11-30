const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
  res.end();
});

server.listen(8080, "127.0.0.1", () => {
  console.log("accessed!!");

  fs.readFile("exampleFile.txt", (err, data) => {
    console.log(data.toString());
  });

  console.log("end");
});
