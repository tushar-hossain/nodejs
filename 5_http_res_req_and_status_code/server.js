const http = require("http");
const port = 5173;
const hostname = "127.1.0.1";

const myServer = http.createServer((req, res) => {
  // res.writeHead(202, { "content-Type": "text/plain" });
  // res.write("hello");
  res.writeHead(202, { "content-Type": "text/html" });
  res.write("<h1>hello</h1>");
  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`click here http://${hostname}:${port}`);
});
