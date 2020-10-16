const express = require("express");
const app = express();
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

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => console.log("Server ready"));
