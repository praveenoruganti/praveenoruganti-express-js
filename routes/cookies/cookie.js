module.exports = (app) => {
//   app.get("/setCookie", function (req, res) {
//     res.cookie("cookie_name", "cookie_value");
//     res.cookie("company", "PraveenOruganti Technologies");
//     res.cookie("name", "Praveen Oruganti");

//     res.status(200).send("Cookie is set");
//   });
  app.get("/getCookie", function (req, res) {
    res.status(200).send(req.cookies);
  }); 

  app.use(function (req, res, next) {
    // check if client sent cookie
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
      // no: set a new cookie
      var randomNumber=Math.random().toString();
      randomNumber=randomNumber.substring(2,randomNumber.length);
      res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
      console.log('cookie created successfully');
    } else {
      // yes, cookie was already present 
      console.log('cookie exists', cookie);
    } 
    next(); // <-- important!
  });
};
