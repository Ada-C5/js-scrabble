var Scrabble = function() {
  this.score_hash = {
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
    "Z": 10,
  };

};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return this.message;
};

Scrabble.prototype.score = function(word) {
  var word_array = word.toUpperCase().split("")
  score_value = 0

  // Applies 50pt bonus for words greater than seven characters long
  if (word_array.length >= 7) {
    score_value += 50;
  }

  var self = this;

  word_array.forEach(function(letter) {
    score_value += self.score_hash[letter];
  });

  return score_value;

};

module.exports = Scrabble;

var scrabble = new Scrabble();
console.log(scrabble.score("hellothere"))
