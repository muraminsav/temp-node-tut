const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage!");
  }
  if (req.url === "/about") {
    res.end("ABOUT");
  }
  res.end(`<h1>Oohs!!</h1>
  <p>Sorry, we can't seem to find the page you are looking for!</p>
  <a href="/">BACKT TO HOME PAGE`);
});
server.listen(5000);
