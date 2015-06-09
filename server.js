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


app.get("/fact", function (req, res) {
  var arrayLength = randomFacts.length;
  var index = Math.floor(Math.random() * arrayLength);

  res.send(randomFacts[index]);
});

var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    punchline: "You can't tuna fish." },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." },
  { setup: "How many tickles does it take to make an octupus laugh?",
    punchline: "Ten Tickles" }
];

app.get('/joke', function (req, res) {
  var randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});
