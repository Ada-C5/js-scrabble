var Scrabble = function() {};



Scrabble.prototype.score = function(word) {
  var score_chart = {
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
  }

  this.score_chart = score_chart;
  this.score_array = [];
  this.word = word.upcase;

  for (var index = 0; index < word.length; index++) {
    score_array = score_array.append(score_chart[word][index]);
  };

  return score

};

module.exports = Scrabble;
