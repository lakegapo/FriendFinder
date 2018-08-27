// NPM package dependencies
var express = require("express");
var bodyParser = require("body-parser");

// shortcut reference to express
var app = express();

// set the port on which the application will listen
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API and HTML routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Instruct the server to listen on the port specified above
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
