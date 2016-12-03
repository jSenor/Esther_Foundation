//External modules
var express = require("express");

//Internal modules
var path = require("path");
var router = require("./routes/routes");

//Application setup
var app = new express();

//Respond to static file requests
app.use(express.static(path.resolve(__dirname, "public")));

//Set up views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Set up routes
app.use(router);

app.listen(3000, function(){
  console.log("Application listening at http://localhost:3000");
});
