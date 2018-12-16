const router = require("./router.js");
// Problem: Need a simple way to look at a Treehouse user's badge and JavaScript point(s) count from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// Create a web server/ API

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
