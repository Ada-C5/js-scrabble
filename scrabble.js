
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
  var length = word.length;
  var bonus_length = 7;
  var bonus_pts = 50;

  // score each letter in the word
  for (var index = 0; index < length; index++) {
    word_score += this.score_chart[word[index]];
  };

  // add 50 pts if 7+ letters
  if (length >= bonus_length) {
    word_score += bonus_pts;
  };

  console.log(word_score);
  return word_score;
};

Scrabble.prototype.highestScoreFrom = function(array_of_words) {
  var scored_array = [];
  var tied_array = [];

  // score each word - bonus already added if applicable
  for (var each of array_of_words) {
    var word_with_score = {
      word: each,
      score: scrabble.score(each)
    };
    scored_array.push(word_with_score);
  };

  // sort by score
  scored_array.sort(function(a, b) {
    return a.score - b.score;
  });

  // pull out highest score & push into tied_array
  var highest = scored_array.pop();
  tied_array.push(highest);

  // find ties & push into tied_array
  for (var each of scored_array) {
    if (highest.score === each.score) {
      tied_array.push(each);
    };
  };

  // if only one word in tied_array, return it
  if (tied_array.length === 1) {
    return highest;
  // otherwise sort the ties by length
  } else {
    tied_array.sort(function(a, b) {
      return a.length - b.length;
    });
  // return shortest.

  console.log(scored_array);
  console.log(tied_array);
  console.log(tied_array[0]);

    return tied_array[0];
  };
};

var scrabble = new Scrabble();
var array = ["cat", "lemon", "pickle", "aaaaaaaaacc", "eeeeeeex"];
scrabble.highestScoreFrom(array);

module.exports = Scrabble;
