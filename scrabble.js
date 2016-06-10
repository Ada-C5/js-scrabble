
function Scrabble(score_chart) {
  this.score_chart = {
    "A": 1,
    "E": 1,
    "I": 1,
    "O": 1,
    "U": 1,
    "L": 1,
    "N": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10
  };
};

Scrabble.prototype.collect = function() {
  prompt.get(['word'], function(error, result) {
    var word = scrabble.score(result);
  });
}

Scrabble.prototype.score = function(result) {
// { word: 'cat' }

  var word_score = 0;
  var word = result['word'];
  word = word.toUpperCase();
  var length = result['word'].length;

  for (var index = 0; index < length; index++) {
    word_score += this.score_chart[word[index]];
  };

  if (length >= 7) {
    word_score += 50;
  };

  console.log(word_score);
  return word_score;

};

var scrabble = new Scrabble();

var prompt = require('prompt');

prompt.start();

scrabble.collect();

module.exports = Scrabble;
