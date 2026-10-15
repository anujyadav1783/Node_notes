# Express.js — Complete Notes

## 1. What is Express.js?

Express.js is a web application framework for Node.js. It provides convenient tools for building web servers, websites, and APIs with JavaScript.

Without a framework, Node.js can create an HTTP server directly. Express makes common server tasks—such as matching URLs to code and sending responses—simpler.

## 2. Main features

- **Routing:** Connect a URL and HTTP method, such as `GET /about`, to a function.
- **Middleware:** Run functions in the request/response cycle for tasks such as logging, parsing data, or authentication.
- **Template engines:** Integrate a template engine to build HTML pages from templates and data. This project does not currently use a template engine.
- **API support:** Build endpoints that return HTML or data such as JSON. Express provides the server-side tools; the application defines its own API behavior.
- **Small and flexible:** Express provides core web-server features and can be extended as needed.

## 3. How a request is handled

1. A browser or other client sends a request to the server.
2. Express checks the request method and URL against the routes.
3. The matching route handler uses `res` to send a response.
4. If no route matches, the final 404 handler sends a “Not Found” response.

In a route handler:

- `req` is the incoming **request**.
- `res` is the outgoing **response**.
- `res.send(...)` sends a response to the client.
- `res.status(code)` sets the HTTP status code.

## 4. Project setup

This project uses ES modules. The `"type": "module"` setting in `package.json` allows `.js` files to use `import` and `export`.

Current `package.json` settings:

```json
{
  "type": "module",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

Express is an application dependency. Nodemon is a development dependency; it restarts the server when files change.

## 5. Starting the server

Open a terminal in the `express` project folder. Install packages once:

```bash
npm install
```

Start the server normally:

```bash
npm start
```

Start with automatic restarts during development:

```bash
npm run dev
```

When the server starts, it prints its local URL. Open that URL in a browser. To stop the server, press `Ctrl+C` in the terminal.

The server uses port `3000` by default. If that port is already in use, choose another port before starting.

PowerShell:

```powershell
$env:PORT=3137
npm start
```

The `PORT` setting applies to that PowerShell session.

## 6. Routes in this project

The project has three route outcomes:

| Request | Result |
| --- | --- |
| `GET /` | Home page |
| `GET /about` | About page |
| Any other URL | 404 Not Found |

For example, visit:

- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/anything-else` to see the 404 response

`app.get(path, handler)` registers a handler for a GET request. Express also has methods such as `app.post()`, `app.put()`, and `app.delete()` for other HTTP methods.

## 7. ES module exports and imports

The page functions are kept in separate files and imported by `app.js`.

### `require()` vs `import`

Node.js has two module systems. Both can load Express and split code across files, but their syntax and project setup differ.

#### CommonJS with `require()`

```js
// app.cjs
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

CommonJS exports values with `module.exports` (or `exports`) and imports them with `require()`:

```js
// home.cjs
function home() {
  return '<h1>Home Page</h1>';
}

function about() {
  return '<h1>About Page</h1>';
}

module.exports = { home, about };
```

```js
// app.cjs
const { home, about } = require('./home.cjs');
```

#### ES modules with `import`

The equivalent server using ES modules looks like this:

```js
// app.js
import express from 'express';
import home, { about } from './home.js';

const app = express();

app.get('/', (req, res) => {
  res.send(home());
});

app.get('/about', (req, res) => {
  res.send(about());
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

ES modules export with `export` and import with `import`:

```js
// home.js
export default function home() {
  return '<h1>Home Page</h1>';
}

export function about() {
  return '<h1>About Page</h1>';
}
```

### Main differences

| CommonJS | ES modules |
| --- | --- |
| Import with `require('./file')` | Import with `import ... from './file.js'` |
| Export with `module.exports = value` | Export with `export` or `export default` |
| Named values are often loaded by destructuring: `const { about } = require('./home.cjs')` | Named values use braces: `import { about } from './home.js'` |
| CommonJS is the traditional Node.js module format | ES modules are the JavaScript standard module format |
| In this example, use `.cjs` to make CommonJS explicit | This project uses `.js` with `"type": "module"` |

Choose one module style for a project and use it consistently. Because this project's `package.json` contains `"type": "module"`, its `.js` files use `import`/`export`; using `require()` in those `.js` files will cause an error. Node treats `.cjs` files as CommonJS and `.mjs` files as ES modules regardless of the package setting. Relative ES module imports should include the file extension, such as `./home.js`.

In short: `require()` is not how you import a named export from an ES module. In the current project, use `import express from 'express'` and `import { check } from './check.js'`.

### Default export

`home.js` provides `home` as its default export:

```js
export default function home() {
  return '<h1>Home Page</h1>';
}
```

Import a default export without braces:

```js
import home from './home.js';
```

### Named exports

The same file provides `about` as a named export:

```js
export function about() {
  return '<h1>About Page</h1>';
}
```

Import a named export using braces. The imported name must match the exported name:

```js
import { about } from './home.js';
```

The 404 page is a named export from `check.js`:

```js
export function check() {
  return '<h1>404 Not Found</h1>';
}
```

```js
import { check } from './check.js';
```

With Node.js ES modules, include the `.js` extension in relative imports, for example `./home.js`.

## 8. Current server code

### `app.js`

```js
import express from 'express';
import home, { about } from './home.js';
import { check } from './check.js';

const app = express();

app.get('/', (req, res) => {
  res.send(home());
});

app.get('/about', (req, res) => {
  res.send(about());
});

app.use((req, res) => {
  res.status(404).send(check());
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

### `home.js`

```js
export default function home() {
  return '<h1>Home Page</h1>';
}

export function about() {
  return '<h1>About Page</h1>';
}
```

### `check.js`

```js
export function check() {
  return '<h1>404 Not Found</h1>';
}
```

The 404 handler is registered after the page routes. Express checks routes in order; putting the fallback last lets `/` and `/about` match first.

## 9. Common mistakes and fixes

### Sending unquoted HTML

**Incorrect in a normal `.js` file:**

```js
res.send(<h1>Home Page</h1>);
```

Node.js does not understand JSX by default. Return HTML as a JavaScript string:

```js
res.send('<h1>Home Page</h1>');
```

To write JSX, a project must first be configured with a tool that transforms JSX. That is not needed for this Express example.

### Forgetting to create the Express app

After importing Express, create the app before calling `app.get()` or `app.listen()`:

```js
const app = express();
```

If it is missing, Node reports that `app` is not defined.

### Import does not match the export

- A **default export** is imported without braces.
- A **named export** is imported with braces and its exported name.

For example, `export function check() {}` must be imported as `import { check } from './check.js';`, not `import check from './check.js';`.

### ES module configuration is missing

If a file uses `import`/`export`, make sure `package.json` contains:

```json
"type": "module"
```

Otherwise, Node may report that `import` cannot be used outside a module.

### Running the wrong command

Use `npm start` or `npm run dev` from the folder containing this project's `package.json`. To run the file directly from this folder, use `node app.js`.

### Port is already in use

If another program is using port `3000`, the server cannot bind to it. Stop the other server or set a different `PORT`, as shown above.

## 10. Summary

- Express is a Node.js framework for handling web requests and responses.
- Routes connect request paths and HTTP methods to handler functions.
- `req` contains request information; `res` is used to send the response.
- This project uses ES modules and separates page functions into `home.js` and `check.js`.
- Return HTML as a string in plain Node.js; JSX is not supported without extra configuration.
- The final middleware returns a 404 status for URLs that do not match a route.
- Run with `npm start`; use `npm run dev` for automatic restarts during development.
