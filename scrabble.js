var Scrabble = function() {};
// YOUR CODE HERE
const LETTERS = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

Scrabble.prototype.score = function (word) {
  var chars     = word.toUpperCase().split(''),
      sum       = 0;
  for (var i = 0; i < chars.length; i++) {
    sum += LETTERS[chars[i]];
  }
  if (word.length === 7) {
    sum += 50;
  }
  return sum;
}

Scrabble.prototype.highestScoreFrom = function (arrayOfWords) {
  var high_word = "",
      high_score = 0;
  for (var arrayOfWord of arrayOfWords) {
    if (this.score(arrayOfWord) > high_score) {
      high_word = arrayOfWord.toUpperCase();
      high_score = (this.score(arrayOfWord));
    }
    else if (this.score(arrayOfWord) === high_score && arrayOfWord.length === 7 && high_word.length !== 7) {
      high_word = arrayOfWord.toUpperCase();
    }
    else if (this.score(arrayOfWord) === high_score && arrayOfWord.length < high_word.length) {
      high_word = arrayOfWord.toUpperCase();
    }
  }
  return high_word
}

module.exports = Scrabble;
