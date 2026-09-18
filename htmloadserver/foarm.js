const http = require('http');          // Node module to create a web server
const fs = require('fs');              // Node module to read files from disk
const queryString = require('querystring'); // Used to parse form data

http.createServer((req, resp) => {    // Start the server and handle incoming requests

    if (req.url == '/') {              // If user opens the home page, load the form HTML

        fs.readFile('foarm.html', 'utf-8', (err, data) => { // Read form file
            if (err) { // If file not found or read error
                resp.writeHead(500, { 'Content-Type': 'text/html' }); // 500 = server error
                resp.write('Internal Server Error'); // Show error message
                resp.end(); // Finish response
                return; // Stop further execution
            }

            resp.writeHead(200, { 'Content-Type': 'text/html' }); // 200 = ok
            resp.write(data); // Send HTML page to browser
            resp.end(); // End request
        });

    }

    else if (req.url == '/submit') {  // When user submits the form to /submit

        let dataBody = []; // Create empty array to collect request data

        req.on('data', (chunk) => { // Event fires when form data arrives in chunks
            dataBody.push(chunk);    // Add each chunk to array
        });

        req.on('end', () => {        // Event fires when all data is received

            let rawdata = Buffer.concat(dataBody).toString(); // Join chunks and convert to string
            // Example: "name=Anuj&email=anuj@gmail.com"

            let readabledata = queryString.parse(rawdata);
            // Converts string into object:
            // { name: 'Anuj', email: 'anuj@gmail.com' }

            let datastring =
                'My name is ' + readabledata.name; // Use name from form data

            // resp.writeHead(200, { 'Content-Type': 'text/html' }); // Send success response
            // resp.write(datastring); // Write result to browser
            // resp.end(); // End response
            fs.writeFileSync("demoflie.txt",datastring);
            resp.end();
        });
    }

    else { // If URL is anything else
        resp.writeHead(404, { 'Content-Type': 'text/html' }); // 404 = not found
        resp.write('404 - Page Not Found'); // Message
        resp.end(); // End response
    }

}).listen(3200, () => {  // Start server on port 3200
    console.log('Server running on http://localhost:3200'); // Print in terminal
});