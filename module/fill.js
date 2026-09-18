const fs = require('fs'); // File system module to read HTML file

function fill(req, res) { // Function to load form page
    fs.readFile('foarm.html', 'utf-8', (err, data) => { // Read the HTML file
        if (err) { // If reading file fails
            res.writeHead(500, { 'Content-Type': 'text/html' }); // Send server error status
            res.write('Internal Server Error'); // Show error message
            res.end(); // End the response
        } else { // If file reads successfully
            res.writeHead(200, { 'Content-Type': 'text/html' }); // Send success status
            res.write(data); // Send the HTML page content to browser
            res.end(); // End response
        }
    });
}

module.exports = fill; // Export function to use in main.js