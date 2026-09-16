# Node.js Notes

## 1) What is Node.js?

- Node.js is a JavaScript runtime environment.
- It allows JavaScript to run outside the browser.
- JavaScript was originally created for browsers, but Node.js made it possible to use JavaScript on the server.
- Node.js runs on:
  - Windows
  - Linux
  - Mac
  - Servers and cloud environments
- It uses Chrome's V8 JavaScript engine, which is fast and powerful.

### Simple meaning:
JavaScript in the browser is for frontend, but Node.js is for backend/server-side development.

---

## 2) JavaScript in Browser vs Node.js

### JavaScript in Browser
- Runs on the client side.
- Used for UI logic, DOM manipulation, events, validation, animations.
- Works only inside the browser.

### JavaScript in Node.js
- Runs on the server side.
- Used for backend logic, API development, database access, file handling, authentication, etc.

### Example:
- Browser: button click, show popup, form validation
- Node.js: create login API, fetch user data, connect with database

---

## 3) Why do we need JavaScript outside the browser?

Browser JavaScript alone is not enough for full applications.

### Limitations of browser-only JavaScript:
- Can't handle server processes directly
- Can't connect to databases directly
- Can't manage files on the server
- Can't build backend logic properly
- Can't serve applications to users on its own

### So we need Node.js because:
- It runs JavaScript on servers
- It helps build APIs
- It allows database and file operations
- It helps create scalable backend apps

---

## 4) Why need Node.js?

### A) Unified Language
- Frontend and backend can use JavaScript.
- Same language across the project.
- Easier for developers to learn and work with.

### B) High Performance
- Uses the V8 engine.
- Very fast execution.
- Good for handling many requests efficiently.

### C) Good for Real-time Applications
Node.js is great for:
- chat applications
- live notifications
- collaborative tools
- gaming servers
- stock updates

### D) Good for Data Streaming
- Works efficiently with continuous data flow.
- Useful for real-time communication and media data.

### E) Other use cases
- APIs
- Microservices
- IoT projects
- Backend for mobile apps
- Full stack apps

---

## 5) How do we use Node.js in Full Stack Development?

Full stack = frontend + backend.

### Concept:
- We create APIs in Node.js.
- Frontend can request data from the API.
- Backend uses Node.js logic and database.
- The API sends data back to frontend or mobile apps.

### BE + FE
- BE = Backend
- FE = Frontend

### Example flow:
1. User opens a website
2. Frontend sends request to Node API
3. API validates request
4. Node.js connects to database
5. API returns JSON response
6. Frontend displays result

---

## 6) Client and Server

### Client
- Browser, mobile app, desktop app
- Sends requests to the server

### Server
- Computer or machine running backend application
- Receives request
- Processes data
- Sends response

### Request
- Client asks for data or action
- Example: login, products, profile info

### Response
- Server returns result
- Example: JSON data, success/failure message, page

### Simple idea:
Client asks, server responds.

---

## 7) What exactly do we do with Node.js?

Node.js is mostly used for API development.

### Main jobs of Node.js:
- Build APIs
- Send and receive data between apps
- Connect frontend with backend
- Connect to databases
- Handle server-side logic
- Read/write files

### Important:
- APIs often send data in JSON format.
- JSON is commonly used for communication between frontend and backend.

### Example:
- React frontend requests product list
- Node.js API fetches product list from database
- API returns JSON to frontend
- Frontend shows products on the page

---

## 8) Why do we need APIs?

API = Application Programming Interface

### Definition:
An API is a way for two software applications to communicate with each other.

### Example:
- Web app talks to backend API
- Mobile app talks to same backend API
- Different services exchange data

### Without APIs:
- Applications cannot communicate properly
- Frontend and backend remain disconnected
- Different platforms cannot easily share data

### APIs help:
- separate frontend and backend
- reuse logic
- connect web, mobile, and other apps
- build scalable systems

---

## 9) API Architecture

### Basic structure:
Database -> Business Logic -> API -> Client

### Flow:
- Database stores data
- Business logic handles processing
- API exposes data to clients
- Clients can be:
  - browser
  - mobile app
  - desktop app
  - another server

### Example:
- Database stores user records
- Business logic fetches records
- API returns JSON data
- Frontend displays it to user

---

## 10) JSON Data

JSON = JavaScript Object Notation

- Lightweight
- Easy to read and write
- Common in APIs
- Works well with JavaScript

### Example:
```json
{
  "name": "Anil",
  "age": 25,
  "city": "Pune"
}
```

### Why JSON is important:
- Easy to send between systems
- Supported by most programming languages
- Frequently used for API responses

---

## 11) File System in Node.js

Node.js can also work with files on the server.

### Example:
```js
var fs = require('fs');

fs.writeFileSync("anil.txt", "my name is anil");
```

### Meaning:
- `require('fs')` loads the file system module
- `writeFileSync` writes data to a file

### This shows:
Node.js can handle:
- file creation
- file reading
- file writing
- server-side storage tasks

---

## 12) Important Points to Remember

- Node.js is a runtime environment for JavaScript.
- It allows JavaScript to run outside the browser.
- It is used for server-side programming.
- Browser JavaScript runs on the client side.
- Node.js runs on the server side.
- Browser JavaScript cannot directly access server resources like databases and file systems.
- We need Node.js to build backend logic.
- Node.js is mostly used for API development.
- APIs send and receive data between applications.
- Frontend and backend work together using APIs.
- Node.js is used for full-stack development.
- Real-time apps and streaming systems use Node.js well.

---

## 13) Short Interview Questions and Answers

### Q1: What is Node.js?
Answer:
Node.js is a JavaScript runtime environment used to run JavaScript on the server side.

### Q2: Why do we need Node.js?
Answer:
Because JavaScript was originally for browsers, but real-world applications need backend logic, database access, and file handling.

### Q3: Where do we use Node.js?
Answer:
We use Node.js for backend development, APIs, database interaction, file handling, and real-time applications.

### Q4: What is client-side scripting?
Answer:
Client-side scripting is code that runs in the browser and handles UI and user interactions.

### Q5: What is server-side scripting?
Answer:
Server-side scripting is code that runs on the server and handles requests, database work, and business logic.

### Q6: What is an API?
Answer:
An API is a way for two software systems to communicate with each other.

---

## 14) Quick Revision Line

“JavaScript runs in the browser, but Node.js lets JavaScript run on the server. Node.js helps build APIs, connect to databases, and power the backend of modern apps.”

---

## 15) Future Topics You Will Learn Next

These are the next important Node.js topics:
- Event loop
- Non-blocking I/O
- Asynchronous programming
- Callbacks
- Promises
- async/await
- Express.js
- REST API
- CRUD operations
- Database connection (MongoDB, MySQL)
- Middleware
- Authentication
- Authorization

These concepts are natural next steps after understanding the basics.

---

## 16) Final Summary

Node.js is one of the most important tools in modern web development because it allows JavaScript to be used on the backend. It helps build APIs, work with databases, serve clients, and create full-stack applications. It is especially useful for real-time apps, backend logic, and communication between frontend and server.

### One line to remember forever:
Node.js brings JavaScript to the server and makes full-stack development possible.

---

# Module in Node.js Notes

## 1) What is a Module?
A module is a reusable block of code in Node.js.

- It helps organize code into smaller files.
- It keeps the project clean and maintainable.
- We can reuse code across multiple files.

### Example:
- built-in module: `http`, `fs`, `os`
- third-party module: installed using npm
- custom module: your own file created in the project

---

## 2) Types of Modules

### Core Modules
These are built into Node.js.

Examples:
- `http`
- `fs`
- `os`
- `path`

We can use them directly without installing anything.

### Third-Party Modules
These are packages installed by npm.

Example:
```bash
npm install express
```

### Custom Modules
These are your own files created in the project.

Example:
```js
// greet.js
function greet() {
  console.log('Hello from custom module');
}

module.exports = greet;
```

Then use it in another file:
```js
const greet = require('./greet');
greet();
```

---

## 3) How to Import a Module
In Node.js, we usually use `require()`.

### Example:
```js
const http = require('http');
```

This means:
- load the `http` module
- use its features

---

## 4) Core Module and Object in Node.js

### Global Object
A global object is available in all modules by default.

Examples:
- `console`
- `process`
- `Buffer`
- `setTimeout`

Important point:
- You do not need to import or require a global object to use it.

### Example:
```js
console.log('Hello');
console.log(process.pid);
```

---

## 5) Built-in Node.js Example: HTTP Module

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello this is anil sidhu!\n');
});

server.listen(4800, () => {
  console.log('Server running at http://localhost:4800');
});
```

### What this does:
- `http.createServer()` creates a server
- callback function handles requests and responses
- `res.writeHead()` sets status and content type
- `res.end()` sends the response to the browser
- `.listen(4800)` starts the server on port 4800

---

## 6) Why is this important?
This is the basic foundation of backend development in Node.js.

It teaches:
- how to create a server
- how requests and responses work
- how to run JavaScript outside the browser
- how APIs begin to take shape

---

## 7) Important Points for Memory

- Module = reusable code block
- Core module = built in Node.js
- Third-party module = installed using npm
- Custom module = your own file
- `require()` is used to import modules
- Global objects are available without import
- `http` module helps create servers
- `createServer()` starts a server
- `listen(port)` runs the server on a port

---

## 8) Quick Interview Version

### Q: What is a module in Node.js?
A: A module is a reusable file or package of code that can be imported into another JavaScript file.

### Q: What are the main types of modules?
A: Core modules, third-party modules, and custom modules.

### Q: What is a global object?
A: It is an object available in all modules without needing to import it.

### Q: What is the `http` module used for?
A: It is used to create web servers in Node.js.

---

## 9) What is a Node Module?

A Node module is a reusable JavaScript file or package that contains some code we can use in another file.

### Simple meaning:
A module is like a small box of code that does one task, and we can import that box wherever needed.

### Why modules are useful:
- Code becomes organized
- Reusability improves
- Project stays clean
- Different files can share logic
- Large applications become easier to manage

### Types of modules in Node.js:
1. Core Modules
   - Built into Node.js
   - Example: `http`, `fs`, `path`, `os`

2. Third-Party Modules
   - Installed from npm
   - Example: `express`, `mongoose`, `nodemon`

3. Custom Modules
   - Made by us in our project
   - Example: `math.js`, `greet.js`

### Example:
```js
const http = require('http');
```
This means:
- load the built-in `http` module
- use its features to create a server

### Important line:
Node module = reusable code that can be imported and used in other files.

---

## 10) What is package.json?

`package.json` is a configuration file in a Node.js project.

It contains important information about the project, such as:
- project name
- version
- description
- scripts
- dependencies
- author
- license

### Why package.json is important:
- It tells Node.js and npm about the project
- It keeps track of installed packages
- It stores commands like `npm start`
- It helps other developers run the project easily

### Example of package.json:
```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

### Important fields:

#### 1. name
Project name

#### 2. version
Current version of the project

#### 3. scripts
Commands used to run project tasks

Example:
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```
Now we can run:
```bash
npm start
```

#### 4. dependencies
Packages required for the project to work properly.

Example:
```json
"dependencies": {
  "express": "^4.18.0"
}
```

#### 5. devDependencies
Packages used only during development.

Example:
```json
"devDependencies": {
  "nodemon": "^3.0.0"
}
```

---

## 11) How does package.json relate to modules?

- Modules are reusable pieces of code.
- package.json tells which modules/packages the project uses.
- `npm install express` adds express to package.json.
- When we run the project, Node uses the installed packages from `node_modules`.

### Example:
```bash
npm install express
```
This command:
- installs the package
- adds it in `package.json`
- makes it available in the project

---

## 12) What is this file? (`response.js`)

This file is a basic Node.js server example.

It uses the built-in `http` module to create a server and handle requests.

### Basic idea:
- `require('http')` loads the HTTP module
- `http.createServer()` creates a server
- callback receives the request and response objects
- `res.write()` or `res.end()` sends a response to the client
- `server.listen(port)` starts the server on a port

### Example:
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

### Meaning of request and response:
- `req` = incoming request from the browser or client
- `res` = outgoing response sent back by the server

### Why this file is important:
This is the first step in backend development. It teaches how a Node server receives requests and sends responses.

---

## 13) What is nodemon?

`nodemon` is a development tool used in Node.js.

### Simple meaning:
It automatically restarts the server whenever we change a file in the project.

### Why do we need it?
Normally, when we edit a file, we have to stop the server manually and run it again.

With `nodemon`, this becomes automatic.

### Example:
```bash
npm install --save-dev nodemon
```
Then run:
```bash
npx nodemon app.js
```

### What it does:
- watches project files
- detects changes
- restarts the Node server automatically
- saves time during development

### Why beginners use it:
It makes backend development easier because we do not have to restart the server again and again after every change.

### Real-life use:
When building APIs, we keep changing code. nodemon helps us test the latest code without restarting manually every time.

---

## 14) Final Summary

Node.js modules help us organize code and reuse functionality. The `http` module lets us create servers, listen on ports, and respond to client requests. This is the starting point of backend and API development in Node.js.

`package.json` is the project configuration file that stores project details, scripts, and dependencies. It is very important because it helps manage installed packages and run the project easily.

`response.js` is a basic Node server file that uses `http.createServer()` to handle requests and send responses.

`nodemon` is a helper tool that automatically restarts the Node server when code changes, making development much faster.

### Important line to remember:
Modules help us organize code, package.json manages the project, and nodemon saves time by restarting the server automatically.
