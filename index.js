const express = require("express");
const crypto = require("crypto");
const app = express();

app.get("/", (req, res, next) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Hello World!!!");
  });
});

app.get("/fast", (req, res, next) => {
  res.send("This was fast");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
