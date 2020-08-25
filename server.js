var express = require("express");

var PORT = process.env.PORT || 8080;


///call express app
var app = express();


app.use(express.static("public"));




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//call handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//bring in routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// //start the server listening
app.listen(PORT, function() {
 
  console.log("Server listening on: http://localhost:" + PORT);
});