export function login() {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Form</title>
      </head>
      <body>
        <main>
          <h1>Login</h1>
          <form action="/login" method="POST">
            <label for="email">Email:</label>
            <input id="email" type="email" name="email" autocomplete="username" required>
            <br><br>
            <label for="password">Password:</label>
            <input id="password" type="password" name="password" autocomplete="current-password" required>
            <br><br>
            <button type="submit">Login</button>
          </form>
        </main>
      </body>
    </html>`;
}