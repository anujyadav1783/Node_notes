# Express.js — Complete Notes

## 1. What is Express.js?

Express.js is a web application framework for Node.js. It helps us build web servers and APIs with JavaScript in a simpler way.

Without Express, we can create a server using the built-in `http` module. But Express makes common tasks easier, such as:

- creating routes for URLs
- handling requests and responses
- serving HTML files
- creating APIs
- handling 404 pages

## 2. Main features

- Routing: map a URL like `/about` to a function
- Middleware: code that runs in the request/response cycle
- Template support: connect a template engine if needed
- API support: return JSON or HTML responses
- Small and flexible: easy to extend for real projects

## 3. How a request is handled

When a browser sends a request:

1. The client asks for a URL.
2. Express checks the method and path.
3. The matching route handler runs.
4. The server sends a response.
5. If no route matches, a 404 response is returned.

In Express route handlers:

- `req` = request object
- `res` = response object
- `res.send(...)` = send response data
- `res.status(code)` = set HTTP status code
- `res.sendFile(path)` = send an actual file

## 4. Project setup

This project uses ES modules. In `package.json` we have:

```json
{
  "type": "module"
}
```

This allows us to use `import` and `export` in JavaScript files.

Example:

```js
import express from 'express';
const app = express();
```

## 5. Starting the server

To start the app:

```bash
npm install
node app.js
```

Then open in browser:

- `http://localhost:3000/`
- `http://localhost:3000/login`
- `http://localhost:3000/about`

If you want to use a custom port:

```powershell
$env:PORT=3137
node app.js
```

## 6. Routes in this project

The project has these routes:

| Request | Result |
| --- | --- |
| `GET /` | Home page |
| `GET /login` | Login page |
| `GET /about` | About page |
| Any other URL | 404 Not Found |

Example:

```js
app.get('/', (_req, res) => {
  res.send('<h1>Home Page</h1>');
});
```

This tells Express: when someone visits `/`, send the home page response.

## 7. Important practical concept: absolute path

This is one of the most important ideas in the file-serving example.

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const absolutePath = path.resolve(currentDirectory, 'home.html');
```

Why this matters:

- `import.meta.url` gives the current file's URL
- `fileURLToPath()` converts it into a real file path
- `path.dirname()` gets the folder location
- `path.resolve()` creates the full absolute path
- `res.sendFile(absolutePath)` sends the correct file

Important rule:

- Always use absolute file paths when sending files from disk.
- A relative path like `'home.html'` may fail when the app is started from another folder.

Example route:

```js
app.get('/', (_req, res) => {
  const absolutePath = path.resolve(currentDirectory, 'home.html');
  res.sendFile(absolutePath);
});
```

This is the main learning concept for this project.

## 8. Full example with HTML files

```js
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = process.env.PORT || 3000;
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

app.get('/', (_req, res) => {
  const absolutePath = path.resolve(currentDirectory, 'home.html');
  res.sendFile(absolutePath);
});

app.get('/login', (_req, res) => {
  const absolutePath = path.resolve(currentDirectory, 'login.html');
  res.sendFile(absolutePath);
});

app.get('/about', (_req, res) => {
  const absolutePath = path.resolve(currentDirectory, 'about.html');
  res.sendFile(absolutePath);
});

app.use((_req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

## 9. ES modules: import and export

Node.js supports two main module systems:

- CommonJS (`require` / `module.exports`)
- ES modules (`import` / `export`)

This project uses ES modules.

### Default export

```js
export default function home() {
  return '<h1>Home Page</h1>';
}
```

Import it like this:

```js
import home from './home.js';
```

### Named export

```js
export function about() {
  return '<h1>About Page</h1>';
}
```

Import it like this:

```js
import { about } from './home.js';
```

### Important rule

- default export -> no braces
- named export -> use braces

Example:

```js
import express from 'express';
import home, { about } from './home.js';
import { check } from './check.js';
```

## 10. 404 handling

```js
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});
```

This runs when no route matches. It is useful for handling wrong URLs.

### `app.use()` keyword

The `app.use()` method is used for middleware in Express. Middleware means code that runs between the request and the final response.

In this project, we used:

```js
app.use((req, res) => {
  res.status(404).sendFile(viewPath + '/404.html');
});
```

What this does:

- `app.use()` runs for every request that reaches it
- it is usually placed after all specific routes like `/` and `/about`
- if no earlier route matches the URL, this code executes
- here, it sends a custom 404 page file

Important points:

- `app.get()` is used for specific routes like `/login`
- `app.use()` is used for middleware or catch-all logic
- `app.use()` does not only mean 404; it can also be used for logging, authentication, static files, etc.

Example:

```js
app.use((req, res, next) => {
  console.log('Request received:', req.url);
  next();
});
```

This kind of middleware runs before the route response and can continue to the next step using `next()`.

### Important keywords used in this app

These are the main keywords we used in the actual app file:

```js
import express from 'express';
import path from 'path';

const app = express();
const viewPath = path.resolve('renderhtmlfile');
```

- `import express from 'express'` -> loads the Express framework
- `import path from 'path'` -> loads Node's built-in path module
- `const app = express()` -> creates the Express application
- `path.resolve('renderhtmlfile')` -> creates the full path of the folder `renderhtmlfile`
- `app.get('/login', ...)` -> defines a route for the login page
- `res.sendFile(absPath)` -> sends the actual HTML file to the browser
- `app.use(...)` -> catches unknown routes and handles 404 pages

This is the exact logic used in the project:

```js
const viewPath = path.resolve('renderhtmlfile');

app.get('/', (req, res) => {
  const absPath = viewPath + '/home.html';
  res.sendFile(absPath);
});

app.use((req, res) => {
  res.status(404).sendFile(viewPath + '/404.html');
});
```

So the important idea is:

- `viewPath` stores the folder where HTML files are kept
- each route maps a URL to a file
- `sendFile()` sends that file to the client
- `app.use()` is the catch-all logic for missing pages

## 11. Common mistakes

### 1. Using a relative path incorrectly

This can fail:

```js
res.sendFile('home.html');
```

Use:

```js
res.sendFile(path.resolve(currentDirectory, 'home.html'));
```

### 2. Forgetting to create the app

```js
const app = express();
```

Without this, route methods and `app.listen()` will not work.

### 3. Using `require()` in ES module files

If `package.json` has `"type": "module"`, use `import` and `export`, not `require()`.

### 4. Writing HTML like JSX

This is wrong:

```js
res.send(<h1>Home Page</h1>);
```

Correct:

```js
res.send('<h1>Home Page</h1>');
```

## 12. Summary

Express.js helps us create small web servers quickly. In this project, we learned:

- how to create an Express app
- how to define routes
- how to send HTML pages
- how to use `res.sendFile()`
- how to work with absolute file paths
- how to handle 404 pages
- how ES modules work in Node.js

These are the core concepts to remember when building a basic Express project.

## 13. Add CSS with Express.js

HTML makes the page structure. CSS changes how that page looks. We can keep HTML pages in a `view` folder and CSS files in a `public` folder.

### Folder structure

```text
express/
├── view/
│   ├── home.html
│   ├── login.html
│   └── about.html
├── public/
│   └── style.css
└── app.js
```

### 1. Import Express and path

```js
import express from 'express';
import path from 'path';
```

- `express` helps us create the server and routes.
- `path` is a built-in Node.js module that helps build file and folder paths safely.

### 2. Create the app and folder paths at the top

```js
const app = express();
const absPath = path.resolve('view');
const publicPath = path.resolve('public');
```

- `express()` creates our Express app.
- `path.resolve('view')` makes an absolute path to the `view` folder.
- `path.resolve('public')` makes an absolute path to the `public` folder.
- `absPath` and `publicPath` are variable names; they store those paths so we can reuse them below.

Run the app from the `express` project folder for these `path.resolve()` calls to find the folders correctly. `path.resolve()` starts from the terminal's current working folder.

### 3. What are static files?

Static files are files that already exist on the server. Express sends the same file to the browser when it is requested; Express does not create or change the file for each request.

Common static files include:

- CSS files, which style a page
- images, such as `.png` or `.jpg` files
- browser-side JavaScript files
- fonts and other files used by a web page

In this example, `public` is just the name of the folder we chose for these files. Express does not require the folder to be named `public`, but `public` is a common convention.

### 4. How Express serves the static files

First, make the path to the folder and register Express's static-file middleware:

```js
const publicPath = path.resolve('public');
app.use(express.static(publicPath));
```

What each part means:

- `path.resolve('public')` creates an absolute path to the `public` folder, based on the folder where you start Node.
- `express.static(publicPath)` creates middleware that looks for requested files inside that folder.
- `app.use(...)` adds that middleware to the Express app, so it can handle incoming requests.

Put this middleware before your routes. When a request comes in, the static middleware checks whether the requested file exists in `public`. If it finds the file, it sends it. If it does not find a matching file, it passes the request on to the next middleware or route.

### 5. How the file path maps to a browser URL

With `app.use(express.static(publicPath))`, the `public` folder is the URL root. The folder name itself is not part of the URL:

| File saved on the server | URL requested by the browser |
| --- | --- |
| `public/style.css` | `/style.css` |
| `public/images/logo.png` | `/images/logo.png` |

For example, the browser does **not** request `/public/style.css`. It requests `/style.css`, and Express finds `style.css` inside the configured `public` folder.

### 6. Send an HTML page for a route

```js
app.get('/', (req, res) => {
  res.sendFile(absPath + '/home.html');
});
```

- `app.get('/')` handles a browser's `GET` request to the home URL.
- `req` contains information about the incoming request.
- `res` is used to send a response.
- `res.sendFile(...)` sends the HTML file to the browser.
- `absPath + '/home.html'` combines the `view` folder path with the HTML filename.

The same pattern can serve the other pages:

```js
app.get('/login', (req, res) => {
  res.sendFile(absPath + '/login.html');
});

app.get('/about', (req, res) => {
  res.sendFile(absPath + '/about.html');
});
```

These routes send the HTML pages. The static middleware separately sends CSS, images, and other files from `public`.

### 7. Connect the CSS file to the HTML

In `view/home.html`, put this inside the `<head>`:

```html
<link rel="stylesheet" href="/style.css">
```

When the browser receives `home.html`, it sees the `<link>` tag and makes another request for `/style.css`. The static middleware finds `public/style.css` and sends it back. The browser then applies those CSS rules to the page.

Example `public/style.css`:

```css
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
}

h1 {
  color: navy;
}
```

You can link the same stylesheet from `home.html`, `login.html`, and `about.html` to give all three pages the same styles.

### 8. Complete example

```js
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const absPath = path.resolve('view');
const publicPath = path.resolve('public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(absPath + '/home.html');
});

app.get('/login', (req, res) => {
  res.sendFile(absPath + '/login.html');
});

app.get('/about', (req, res) => {
  res.sendFile(absPath + '/about.html');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

### Quick recap

1. Save CSS, images, and other browser files in `public`.
2. Build the absolute path to `public` with `path.resolve('public')`.
3. Add `app.use(express.static(publicPath))` before the routes.
4. Link the CSS in HTML using its URL, for example `/style.css`.
5. The browser requests that URL, and Express finds the matching file in `public`.

**Remember:** `public/style.css` is the file's location on disk; `/style.css` is its URL. `express.static(publicPath)` connects the URL to the file.

## 14. Middleware in Express.js

### What is middleware?

Middleware is a function that runs while Express is handling a request. It can read or change the request and response, send a response, or pass control to the next middleware or route.

The usual middleware shape is:

```js
function myMiddleware(req, res, next) {
  // Do something with the request or response.
  next();
}
```

- `req` is the incoming request.
- `res` is the response that the server can send back.
- `next` is a function that passes control to the next middleware or route.

### How middleware runs

Express runs middleware in the order it is registered in `app.js`. For example:

```js
app.use(firstMiddleware);
app.use(secondMiddleware);
app.get('/', homeRoute);
```

The request goes through `firstMiddleware`, then `secondMiddleware`, and then the home route, provided each middleware calls `next()`.

If middleware sends a response, such as `res.send(...)` or `res.sendFile(...)`, it normally should not call `next()` afterward. If it neither sends a response nor calls `next()`, the request will remain waiting.

### Registering middleware for all routes

```js
app.use(authMiddleware);
```

With no path specified, this middleware runs for requests reaching the app, so it must be registered before the routes it should protect. `app.use()` can also take a path to limit where middleware runs:

```js
app.use('/admin', authMiddleware);
```

This runs the middleware for requests under `/admin`.

### Middleware types

| Type | Example | Purpose |
| --- | --- | --- |
| Application-level | `app.use(...)`, `app.get(..., middleware, handler)` | Middleware used by an Express app |
| Router-level | `router.use(...)` | Middleware used with an Express router |
| Built-in | `express.static(...)`, `express.json()` | Common features provided by Express |
| Third-party | `cors`, `morgan` | Extra features installed as packages |
| Error-handling | `(err, req, res, next) => { ... }` | Handles errors passed through Express |

### Example: checking a client's IP address

This example follows the same idea as an IP-checking middleware: inspect the request, block a matching address, or call `next()` to continue.

```js
function ipCheck(req, res, next) {
  const ip = req.socket.remoteAddress;

  if (ip && ip.includes('192.168.1.95')) {
    return res.status(403).send('Access to this page is not allowed.');
  }

  next();
}

app.use(ipCheck);
```

- `req.socket.remoteAddress` provides the address of the connection reaching the server.
- If the condition matches, the middleware sends a `403 Forbidden` response and stops that request.
- Otherwise, `next()` lets the request continue to the next middleware or route.
- `return` makes it clear that the function stops after sending the blocked response.

Register `app.use(ipCheck)` before the routes you want it to check. In a production app, IP addresses can be affected by proxies; only use forwarded IP headers when the proxy setup is configured and trusted.

### Why middleware is useful

Middleware lets us add common request-handling steps without repeating the same code inside every route. It is commonly used for:

- logging requests
- checking authentication or permissions
- serving static files
- parsing JSON or form data
- checking requests and sending a 404 response
- handling errors

**Remember:** middleware runs in order. Call `next()` to continue, or send a response to finish the request.

## 15. Route middleware

### What is route middleware?

Route middleware is middleware that runs only for a particular route, rather than for every request. It is useful when only some routes need a check, such as checking a user's age before allowing access to a page.

### Create route middleware

A route middleware function uses `req`, `res`, and `next`, like other middleware:

```js
function ageCheck(req, res, next) {
  const age = Number(req.query.age);

  if (age < 18) {
    return res.status(403).send('You must be 18 or older.');
  }

  next();
}
```

Here, `req.query.age` reads the `age` value from a URL such as `/members?age=20`. If the age is below 18, the middleware sends a response and stops. Otherwise, `next()` allows Express to continue.

### Apply middleware to a route

Pass the middleware to the route before its final handler:

```js
app.get('/members', ageCheck, (req, res) => {
  res.send('Welcome to the members page.');
});
```

For `GET /members`, Express runs `ageCheck` first. If it calls `next()`, Express runs the route handler. If it sends a response, the route handler does not run.

Try these URLs:

- `/members?age=16` -> access is denied
- `/members?age=20` -> the members page is shown

### Apply two route middleware functions

You can add more than one middleware to a route. They run from left to right:

```js
function logRequest(req, res, next) {
  console.log(`Request received for ${req.path}`);
  next();
}

function ageCheck(req, res, next) {
  const age = Number(req.query.age);

  if (age < 18) {
    return res.status(403).send('You must be 18 or older.');
  }

  next();
}

app.get('/members', logRequest, ageCheck, (req, res) => {
  res.send('Welcome to the members page.');
});
```

The order is `logRequest` -> `ageCheck` -> route handler. Every middleware must call `next()` to continue, or send a response to finish the request.

### `app.use()` versus route middleware

- `app.use(middleware)` applies middleware broadly to requests reaching the app (or to a path if one is specified).
- `app.get('/members', middleware, handler)` applies middleware only to that route and HTTP method.

Use route middleware when a check belongs to one route. Use `app.use()` when it should apply across many routes.

### Interview questions

**Q: What is route middleware in Express?**  
**A:** A function that runs before a specific route handler. It can inspect the request, send a response, or call `next()` to continue.

**Q: How do you apply two middleware functions to one route?**  
**A:** Pass both functions before the final handler, for example `app.get('/members', firstMiddleware, secondMiddleware, handler)`. They run in the order listed.

## 16. Built-in middleware in Express.js

### What is built-in middleware?

Built-in middleware is middleware that comes with Express, so you can use it without installing a separate package. It helps with common tasks such as serving static files or reading data sent in a request.

Two useful examples are `express.json()` and `express.urlencoded()`.

### Example 1: `express.json()`

Use `express.json()` when a client sends JSON data in the request body. It reads that JSON and makes the result available as `req.body`.

```js
app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);
  res.send(`User name: ${req.body.name}`);
});
```

For example, if a client sends this JSON to `POST /users`:

```json
{
  "name": "Anuj"
}
```

The route can read the value with `req.body.name`. Add `app.use(express.json())` before the routes that need to read JSON.

### Example 2: `express.urlencoded()`

Use `express.urlencoded()` to read form data submitted by a standard HTML form:

```js
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send(`Login submitted for: ${req.body.email}`);
});
```

For example, a form field named `email` can be read in the route as `req.body.email`. Add this middleware before the form-handling routes; otherwise, `req.body` will not contain the submitted form fields.

### Remember

- `express.json()` reads JSON request bodies.
- `express.urlencoded(...)` reads URL-encoded HTML form bodies.
- Both make the parsed values available through `req.body`.
- Register the middleware before the routes that use `req.body`.

### Interview questions

**Q: Name two built-in middleware functions in Express.**  
**A:** `express.json()` and `express.urlencoded()`.

**Q: Why do we use `express.json()`?**  
**A:** It parses JSON sent in a request body so a route can access the values through `req.body`.

**Q: What happens if body-parsing middleware is registered after a route?**  
**A:** That route runs before the middleware, so the body has not been parsed for it. Register the middleware before routes that need the parsed body.

## 17. External (third-party) middleware

### What is external middleware?

External middleware is made by someone outside Express and installed as a separate package. It adds features that are not included directly in Express.

Examples include:

- `morgan` for logging HTTP requests
- `cors` for configuring cross-origin requests
- `helmet` for setting security-related HTTP headers

### Install and use external middleware

For example, install `morgan` from the Express project folder:

```bash
npm install morgan
```

Then import it and register it with `app.use()`:

```js
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Home page');
});
```

`morgan('dev')` creates request-logging middleware. When a request comes in, it prints information about that request in the terminal, then passes control to the next middleware or route.

### How to use an external middleware package

1. Install the package with `npm install package-name`.
2. Import it in your app file.
3. Create/configure the middleware if the package requires it.
4. Register it with `app.use(...)` before the routes that need it.

**Remember:** built-in middleware comes with Express; external middleware is installed as an additional package.

### Interview questions

**Q: What is external middleware?**  
**A:** Middleware provided by a separate package rather than by Express itself.

**Q: Name an external middleware package.**  
**A:** `morgan` is commonly used to log HTTP requests. It must be installed before it can be imported and used.

## 18. Error-handling middleware

### What is error-handling middleware?

Error-handling middleware is a special Express middleware function for handling errors during a request. Its function has **four parameters** in this exact order: `err`, `req`, `res`, and `next`.

```js
function errorHandler(err, req, res, next) {
  // Handle the error here.
}
```

Express recognizes it as error-handling middleware because it has four parameters.

### Pass an error to the error handler

A route can pass an error to Express by calling `next(err)`:

```js
app.get('/example', (req, res, next) => {
  const err = new Error('Something went wrong');
  next(err);
});
```

When Express receives `next(err)`, it skips normal middleware and routes and looks for error-handling middleware.

### Register the error handler

Put the error handler **after your routes and other middleware**:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send('Something went wrong on the server.');
});
```

- `err` contains the error.
- `req` and `res` are the request and response.
- `next` can pass the error to another error handler if this handler cannot handle it.
- The example logs diagnostic details on the server and sends a general message to the client.

### Complete example

```js
import express from 'express';

const app = express();

app.get('/example', (req, res, next) => {
  next(new Error('Example error'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong on the server.');
});

app.listen(3000);
```

**Remember:** normal middleware usually has three parameters (`req`, `res`, `next`); error-handling middleware has four (`err`, `req`, `res`, `next`) and is registered after routes.

### Interview questions

**Q: How can you recognize Express error-handling middleware?**  
**A:** It has four parameters in this order: `(err, req, res, next)`.

**Q: How do you pass an error to Express middleware?**  
**A:** Call `next(err)` from a route or middleware.

## 19. Template engines with Express (EJS)

### What is a template engine?

A template engine lets the server combine an HTML template with data, then send the finished HTML page to the browser. This is useful when page content changes, such as showing a user's name or a list of products.

Popular template engines include:

- EJS (Embedded JavaScript)
- Pug (formerly Jade)
- Handlebars

This example uses EJS. The HTML structure stays in a template file, while values between `<%= ... %>` are filled in by the server.

### Install EJS

Run this command in the project folder:

```bash
npm install ejs
```

### Create the EJS template

Create this file: `views/home.ejs`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><%= title %></title>
</head>
<body>
  <h1>Hello, <%= name %>!</h1>
  <p>This page was rendered using EJS.</p>
</body>
</html>
```

This is HTML with EJS placeholders:

- `<%= title %>` inserts the `title` value.
- `<%= name %>` inserts the `name` value.
- `<% ... %>` runs EJS code without inserting its result into the page.

`<%=` escapes HTML characters in the value before displaying it. This is safer for text that may come from a user. Avoid using EJS's unescaped output tag `<%- ... %>` with untrusted values.

### Configure Express and render the page

Create or update `app.js`:

```js
import express from 'express';
import path from 'node:path';

const app = express();
const PORT = 3000;
const viewsPath = path.resolve('views');

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'My Home Page',
    name: 'Anuj'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

What the important lines do:

- `app.set('view engine', 'ejs')` tells Express to use EJS for templates.
- `app.set('views', viewsPath)` tells Express which folder contains the templates. `path.resolve('views')` makes an absolute path from the folder where Node is started.
- `res.render('home', data)` finds `views/home.ejs`, combines it with the supplied data, and sends the resulting HTML to the browser. The `.ejs` extension is added automatically.
- `title` and `name` in the object become available in the template as `<%= title %>` and `<%= name %>`.

Start the app from the project folder:

```bash
node app.js
```

Open `http://localhost:3000/`. The browser receives normal HTML; it does not see the EJS template code.

### The rendering flow

1. The browser requests `/`.
2. Express matches the `app.get('/')` route.
3. `res.render()` opens `views/home.ejs` and provides the data.
4. EJS replaces the placeholders and produces HTML.
5. Express sends that HTML response to the browser.

**Remember:** `res.sendFile()` sends an existing file as-is. `res.render()` uses a template engine to fill a template with data and send the generated HTML.

### Interview questions

**Q: What is a template engine?**  
**A:** A tool that combines a page template with server-side data to create HTML.

**Q: How do you tell Express to use EJS?**  
**A:** Install EJS, then configure it with `app.set('view engine', 'ejs')`.

**Q: What is the difference between `res.sendFile()` and `res.render()`?**  
**A:** `res.sendFile()` sends an existing file. `res.render()` fills a template with data and sends the generated HTML.
