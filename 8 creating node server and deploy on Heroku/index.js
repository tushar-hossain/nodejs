const http = require("http");
const fs = require("fs");
const port = process.env.port;

const handleServer = (fileType, statusCode, res) => {
  fs.readFile(fileType, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleServer("home.html", 200, res);
  } else if (req.url === "/about") {
    handleServer("about.html", 200, res);
  } else if (req.url === "/contact") {
    handleServer("contact.html", 200, res);
  } else {
    handleServer("404.html", 404, res);
  }
});

server.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
