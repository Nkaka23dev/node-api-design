const http = require('http');
const fs = require("fs");

const HandleIncomingAndOngoingRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let path = "./views/";
    switch (req.url) {
        case "/":
            res.statusCode = 200;
            path += "index.html"
            break
        case "/about":
            res.statusCode = 200;
            path += "about.html"
            break
        default:
            res.statusCode = 404;
            path += "404.html"
    }
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log("Error Occured!");
        } else {
            res.write(data)
            res.end();
        }

    })
}
const server = http.createServer(HandleIncomingAndOngoingRequest);

server.listen(4200, () => {
    console.log("Server is Created and is running on port 4200",);
})