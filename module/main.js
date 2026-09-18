const http = require('http'); // Node core module to create server
const fill = require('./fill'); // Import the function that loads the form page
const submit = require('./submit'); // Import the function that handles form submission

http.createServer((req, res) => { // Create server and handle each request

    if (req.url === '/') { // If browser requests home page path
        fill(req, res); // Call fill function to show the form
    }
    else if (req.url === '/submit') { // If browser submits form to /submit
        submit(req, res); // Call submit function to process data
    }
    else { // If path is anything else
        res.writeHead(404, { 'Content-Type': 'text/html' }); // Send 404 status
        res.end('404 - Page Not Found'); // Display message
    }

}).listen(3200, () => { // Run server on port 3200
    console.log('Server running on http://localhost:3200'); // Print server URL in console
});