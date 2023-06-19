const http  = require("http");
const fs    = require("fs");

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    var http = fs.readFileSync("./server/index.html").toString("utf-8");
    res.end(http);
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});