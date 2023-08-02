const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        console.log(res)
        res.end();
    }
});

server.listen(4200, () => {
   console.log("Server is learning on PORT http://localhost:4200");
}) 