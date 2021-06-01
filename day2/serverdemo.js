var http = require('http');

http.createServer(function(req, res) {
    res.end("Welcome to Node JS");
}).listen(3000);
console.log("server is started on port 3000");