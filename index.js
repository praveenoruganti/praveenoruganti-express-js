const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./routes/middleware/Logger');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());  

app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

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

require("./routes/mysql/query")(app);
app.use('/api/v1_0/members', require('./routes/api/members'))

require("./routes/cookies/cookie")(app);

app.get("/info", (req, res) => {
  res.send(" App is up and running....");
});

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
