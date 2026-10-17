import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3000;
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

app.get("/", (_req, res) => {
  const absolutePath = path.resolve(currentDirectory, "home.html");
  res.sendFile(absolutePath);
});

app.get("/login", (_req, res) => {
  const absolutePath = path.resolve(currentDirectory, "login.html");
  res.sendFile(absolutePath);
});

app.get("/about", (_req, res) => {
  const absolutePath = path.resolve(currentDirectory, "about.html");
  res.sendFile(absolutePath);
});

app.use((_req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
