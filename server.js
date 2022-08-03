"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var corsOptions = {
  origin: "*", //['*', 'http://localhost:3001', 'http://localhost:3000', 'https://d-olive-admin.venuslab.co']
};
app.use(cors(corsOptions));

app.get("/webhook", function (req, res) {
    let body = req.body;
    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });
    return res.send("done");
});
app.use(function (req, res, next) {
  res.status(404);
  if (res.status(404).statusCode == 404) {
    return res.json({ status: "false", message: "error", data: "Not Found." });
  }
});
app.listen(port);
console.log("App is running at Port " + port);