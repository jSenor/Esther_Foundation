//External modules
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.render("index", {title: "Home"});
});

router.get("/learn-more", function(req, res){
  res.render("about", {title: "Learn More"});
});

module.exports = router;
