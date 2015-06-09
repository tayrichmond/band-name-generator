var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
});

app.get("/", function (req, res) {
  res.send("hello universe!");
});

var randomFacts = ["Odontophobia is the fear of teeth.",
  'Karoke means "empty orchestra" in Japanese.',
  "Elephants are the only mammals that can't jump."];


app.get("/", function (req, res) {
  var arrayLength = randomFacts.length;
  var index = Math.floor(Math.random() * arrayLength);

  res.send(randomFacts[index]);
});
