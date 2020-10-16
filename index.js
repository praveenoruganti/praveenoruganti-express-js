const express = require("express");
const app = express();
const mysql = require('mysql');
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => res.send("Hello World!"));

app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.get("/:word/echo", (req, res) => {
  res.json({
    echo: req.params.word,
  });
});

app.post("/name", function (req, res) {
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

require("./mySQL/query")(app);

const sqlParams = {
  connectionLimit: 1,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "praveendb",
};

let connection = mysql.createPool(sqlParams);
module.exports.connection = connection;

app.get("/info", (req, res) => {
  res.send(" App is up and running....");
});

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => console.log("Server ready"));
