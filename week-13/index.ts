// topic - http module - in node.js
// http module in node.js is a core module that provides functionality for creating HTTP servers and making HTTP requests.

// as the first step, we have to import http module
const http: typeof import("http") = require("http");

// now we can create a server with the http module imported;
const server = http.createServer(
  // here we are writing a callback func to handle requests;
  (req: any, res: any) => {
    // we will be getting every requests to this server, here.
    // we can know that the endpoint which user requested now, by taking req.url
    // and we can provide and have different usecases for different routes.
    // without express.js, we have to use conditional statements(if/switch) to manage different endpoints differently.
    console.log(`endpoint is ${req.url}`);
    console.log(`http method is ${req.method}`);
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("welcome to the homepage!");
    } else if (req.method === "POST" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("in home page with post method");
    } else if (req.method === "GET" && req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("about us page");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("page not found");
    }
  }
);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`server started at the port ${PORT}`);
});
