const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    console.log("Request:", req.url);

    // CSS
    if (req.url === '/style.css') {

        fs.readFile('style.css', 'utf-8', (err, data) => {

            if (err) {
                resp.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                resp.end('CSS file not found');
                return;
            }

            resp.writeHead(200, {
                'Content-Type': 'text/css'
            });

            resp.end(data);
        });

        return;
    }


    // HOME
    if (req.url === '/') {

        fs.readFile('html/header.html', 'utf-8', (err, headerdata) => {

            if (err) {
                resp.writeHead(500);
                resp.end('Header file not found');
                return;
            }

            fs.readFile('html/index.html', 'utf-8', (err, data) => {

                if (err) {
                    resp.writeHead(500);
                    resp.end('Home page not found');
                    return;
                }

                resp.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                resp.end(headerdata + data);
            });
        });

        return;
    }


    // ABOUT
    else if (req.url === '/about') {

        fs.readFile('html/header.html', 'utf-8', (err, headerdata) => {

            if (err) {
                resp.writeHead(500);
                resp.end('Header file not found');
                return;
            }

            fs.readFile('html/about.html', 'utf-8', (err, data) => {

                if (err) {
                    resp.writeHead(500);
                    resp.end('About page not found');
                    return;
                }

                resp.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                resp.end(headerdata + data);
            });
        });

        return;
    }


    // CONTACT
    else if (req.url === '/contact') {

        fs.readFile('html/header.html', 'utf-8', (err, headerdata) => {

            if (err) {
                resp.writeHead(500);
                resp.end('Header file not found');
                return;
            }

            fs.readFile('html/contact.html', 'utf-8', (err, data) => {

                if (err) {
                    resp.writeHead(500);
                    resp.end('Contact page not found');
                    return;
                }

                resp.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                resp.end(headerdata + data);
            });
        });

        return;
    }


    // 404
    resp.writeHead(404, {
        'Content-Type': 'text/plain'
    });

    resp.end('404 - Page Not Found');


}).listen(3000, () => {

    console.log('Server running on http://localhost:3000');

});