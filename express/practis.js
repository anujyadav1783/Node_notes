import express from "express";
import { mainBody } from "./mainbody.js";
import { login } from "./login.js";
import { loginCheck } from "./logincheck.js";

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(mainBody());
});

app.get("/login", (req, res) => {
  res.send(login());
});

app.post("/login", (req, res) => {
  loginCheck(req, res);
});

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
