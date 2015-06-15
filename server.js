var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bandNames = [
  "Wicked Purple Mountain Ranges",
  "Pickled Princes",
  "Neverly Appointed"
];

var adjectives = [
  "Beautiful",
  "Sick",
  "Adorable",
  "Bumpy",
  "Green",
  "Delightful",
  "Slippery",
  "Flavorfilled",
  "Mega"
];

var verbs = [
  "Running",
  "Swimming",
  "Screaming",
  "Falling",
  "Driving",
  "Sitting",
  "Standing"
];

var nouns = [
  "Tree",
  "Airplane",
  "Bunny",
  "Kitty",
  "Couch",
  "Sauce",
  "Cake",
  "Spoon"
];

app.use(express.static(__dirname + "/app/"));

app.get("/adjective", function(request, response) {
  var randomIndex = Math.floor(Math.random() * adjectives.length);
  response.json( { word: adjectives[randomIndex] } );
});

app.get("/verb", function(request, response) {
  var randomIndex = Math.floor(Math.random() * verbs.length);
  response.json( { word: verbs[randomIndex] } );
});

app.get("/noun", function(request, response) {
  var randomIndex = Math.floor(Math.random() * nouns.length);
  response.json( { word: nouns[randomIndex] } );
});

app.listen(port, function() {
  console.log("Your server started on port " + port);
});

