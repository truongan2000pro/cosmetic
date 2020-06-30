require("./connect-mongo");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const port = 9000;
// const model = import("./modules/auth/model");

const routes = require("./routes");
const {
  readTokenMiddleware,
  authenticatedMiddleware,
} = require("./modules/auth");

const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret: "My secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 12 * 60 * 60 }, // 12hours
  })
);
app.use(readTokenMiddleware);

// app.get("/test", (req, res, next) => {
//   res.json(req.user);
// });

// app.get("/require-token", authenticatedMiddleware, (req, res) => {
//   res.send("ok");
// });

app.use(routes);

app.get("/", (req, res) => res.send("helo"));

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, (err) => {
  console.log(err || "sever open");
});
