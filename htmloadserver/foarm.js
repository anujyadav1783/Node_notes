const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    fs.readFile('foarm.html', 'utf-8', (err, data) => {

        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/html' });
            resp.write('Internal Server Error');
            resp.end();
            return;
        }

        if (req.url == '/') {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
              resp.end();
        }

        else if (req.url == '/submit') {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write('<h1>Data Submitted</h1>');
            resp.end();
        }

    });

}).listen(3200, () => {
    console.log('Server running on http://localhost:3200');
});