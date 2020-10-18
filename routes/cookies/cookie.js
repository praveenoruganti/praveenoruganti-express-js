module.exports = (app) => {
  app.get("/setCookie", function (req, res) {
    res.cookie("cookie_name", "cookie_value");
    res.cookie("company", "PraveenOruganti Technologies");
    res.cookie("name", "Praveen Oruganti");
    res.status(200).send("Cookie is set");
  });
  app.get("/getCookie", function (req, res) {
    res.status(200).send(req.cookies);
  });
};
