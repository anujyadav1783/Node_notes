const http = require('http');

http.createServer((res, resp) => {
    resp.write("<h1>hey i have started learning</h1>");
    resp.end("hello");
}).listen(4800);
