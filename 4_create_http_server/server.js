const http = require("http");
const port = 5173;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hello I am create your first server");
});

myServer.listen(port, hostname, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
