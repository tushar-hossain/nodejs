const http = require("http");
const port = 5173;
const hostName = "127.0.0.1";
const fs = require("fs");
const { error } = require("console");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./pages/home.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./pages/about.html", (error, data) => {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("./pages/contact.html", (error, data) => {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./pages/error.html", (error, data) => {
      res.writeHead(404, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
