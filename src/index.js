var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url == "/welcome") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Welcome to Dominos!");
  }
  if (req.url == "/contact") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404, { "Content-type": "error" });
    res.end("404 ERROR!");
  }
}
httpServer.listen(3000, () => console.log("listening at port 3000"));
module.exports = httpServer;
