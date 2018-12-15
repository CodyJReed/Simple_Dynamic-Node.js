// Problem: Need a simple way to look at a Treehouse user's badge and JavaScript point(s) count from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// 1. Create a web server/ API

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  homeRoute(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 2. Handle HTTP route Get / and POST/ i.e Home

function homeRoute(request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  } else {
    response.end("You require approval\n");
  }
}

// 3. Handle HTTP route GET /:username i.e / codyreed3

// 4. Function that handles the reading of files and merge in value
