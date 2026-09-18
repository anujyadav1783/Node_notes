const queryString = require('querystring'); // Used to parse form data

function submit(req, res) { // Function to process submitted form data
    let dataBody = []; // Array to store incoming data chunks

    req.on('data', (chunk) => { // When request data arrives in chunks
        dataBody.push(chunk); // Add each chunk to array
    });

    req.on('end', () => { // When all data is received
        let rawdata = Buffer.concat(dataBody).toString(); // Join all chunks into one string
        let readabledata = queryString.parse(rawdata); // Convert string like name=Anuj to object

        let datastring = 'My name is ' + readabledata.name; // Use value of name field

        res.writeHead(200, { 'Content-Type': 'text/html' }); // Send success response
        res.write(datastring); // Display result in browser
        res.end(); // Finish response
    });
}

module.exports = submit; // Export function to use in main.js