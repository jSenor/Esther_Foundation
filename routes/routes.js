//External modules
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.end("Hello");
});

module.exports = router;
