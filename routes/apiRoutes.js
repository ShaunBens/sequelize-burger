var express = require("express");

var router = express.Router();
var db = require("../models/");


router.get("/", function(req, res) {
  res.redirect("/burgers");
});


router.get("/burgers", function(req, res) {
  db.Burger.findAll()
    .then(function(allBurgers) {
      // console.log(allBurgers);
      var hbsObject = { burger: allBurgers };
      return res.render("index", hbsObject);
    });
});


router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(newBurger) {
    // console.log(newBurger);
    res.redirect("/");
  });
});


router.put("/burgers/update/:id", function(req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(devourBurger) {
    res.json("/");
  });
});

module.exports = router;
