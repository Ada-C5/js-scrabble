
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

Scrabble.prototype.score = function(word) {

  var word_score = 0;
  word = word.toUpperCase();
  var length = word.length

  // score each letter in the word
  for (var index = 0; index < length; index++) {
    word_score += this.score_chart[word[index]];
  };

  // add 50 pts if 7+ letters
  if (length >= 7) {
    word_score += 50;
  };

  console.log(word_score);
  return word_score;

};

var scrabble = new Scrabble();
scrabble.score("cat")

module.exports = Scrabble;
