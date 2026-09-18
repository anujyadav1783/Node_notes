const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('web.html', 'utf-8', (err, data) => {
        if(err){
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end('internal server error');
            return;
        }
        else{
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        }
    });
}).listen(3100, () => {
    console.log('Server running at http://localhost:3100');
});