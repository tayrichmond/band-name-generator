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

app.listen(port, function() {
  console.log("Your server started on port " + port);
});

app.get("/", function(request, response) {
  var randomIndex = Math.floor(Math.random() * bandNames.length);
  response.send(bandNames[randomIndex]);
});

app.get("/adjective", function(request, response) {
  var randomIndex = Math.floor(Math.random() * adjectives.length);
  response.json( { word: adjectives[randomIndex] } );
});

