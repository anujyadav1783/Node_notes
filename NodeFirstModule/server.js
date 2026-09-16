const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello this is anil sidhu!\n');
});

server.listen(4800, () => {
  console.log('Server running at http://localhost:4800');
});