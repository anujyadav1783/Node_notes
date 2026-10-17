export function loginCheck(req, res) {
  const { email, password } = req.body || {};

  // These credentials are for this demonstration only.
  if (email === "test@example.com" && password === "123456") {
    return res.send('<h1>Login Successful!</h1><a href="/">Home</a>');
  }

  return res.status(401).send(
    '<h1>Invalid Email or Password!</h1><a href="/login">Try again</a>',
  );
}