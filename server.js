var express = require("express");
var app = express();
var server = require("http").Server(app);
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("This is Praveen Oruganti Express JS");

app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", (req, res) => {
  // serve the string
  // res.send("Hello Express");
  //Serve an HTML File
  res.sendFile(__dirname + "/views/index.html");
});

// Serve JSON on a Specific Route
app.get("/json", (req, res) => {
  res.json({
    //Use the .env File
    message:
      process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json",
  });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time,
    });
  }
);

app.get("/:word/echo", (req, res) => {
   res.json({
    echo: req.params.word,
  });
});

app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.post("/name", function (req, res) {
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

// Serve Static Assets
app.use(express.static(__dirname + "/public"));
module.exports = app;

server.listen(process.env.PORT || 3001);