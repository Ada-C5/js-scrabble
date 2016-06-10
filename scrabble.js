'use strict';
var prompt = require('prompt');

prompt.start();

// prompt.get(['word'], scrabble);


var Scrabble = function() {
  var scoring = {
    "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2,
    "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8,
    "Q": 10, "Z": 10
  };

  var bonus = 50;

};

Scrabble.prototype.score = function(error, word) {

 if (word.length > 7) {
      throw "You can only enter a word up to seven letters long."
  };

  var wordArray = word.toUpperCase().split('');

  var points = 0;
  if (word.length == 7) {
    points += bonus;
   }; 

  for (var letter of wordArray) {
    points += scoring[letter];
  };

  return points; 
};

module.exports = Scrabble;
