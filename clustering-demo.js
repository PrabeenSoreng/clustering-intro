process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

// Is the file beign executed in clild mode?
if (cluster.isMaster) {
  // Causes index.js to be executed *again* but in child mode
  cluster.fork();
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  // Child, act like a server and do nothing else
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
}
