//External modules
var express = require("express");
var router = express.Router();

var titleFinder = require("./titles");

router.get("/", function(req, res){
  res.render("index", {title: "Home"});
});

router.get("/learn-more", function(req, res){
  res.render("about", {title: "Learn More"});
});

router.get("/reach-us", function(req, res){
  res.render("contact", {title: "Reach Us"});
});

router.get("/our-cases/:id", function(req, res){
	var pageAddress = "cases/" + req.params.id;
	res.render(pageAddress, {title: titleFinder.getTitle(req.params.id)});
});

module.exports = router;
