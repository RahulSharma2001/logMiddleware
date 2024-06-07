const express = require("express");
const morgan = require("morgan");
const app = express();

const myMiddleware = (req, res, next) => {
  console.log(`My Middleware`);
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} - IP: ${
      req.ip
    } \nMorgan Middleware: `
  );

  next();
};

app.use(myMiddleware);
app.use(morgan("common"));

app.get("/api/v1/dummyApi", (req, res) => {
  res.json({
    message: "Get Api after Middlewares",
  });
});

app.listen(5000, () => console.log("Server up and running"));
