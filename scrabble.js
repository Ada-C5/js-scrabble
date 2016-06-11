var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {

  var scoring_chart = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
  };

  // for each letters in the given word, create a new array of letter scores and add them up
  var total_score = 0;
  for (var letter of word) {
    total_score += scoring_chart[letter]; //the value for that letter
  };

  return total_score;
};

//testing stuff out
s = new Scrabble();
var word = "dog";

console.log(s.score(word.toUpperCase()));

word.toUpperCase(); //toUpperCase is a method on the object (which is a function) called String that exists somewhere in javascript
Number(word) // Number() is a function that returns a Number



module.exports = Scrabble;
