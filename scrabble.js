var Scrabble = function() {
  this._tilepoints = {
    'A':1,
    'B':3,
    'C':3,
    'D':2,
    'E':1,
    'F':4,
    'G':2,
    'H':4,
    'I':1,
    'J':8,
    'K':5,
    'L':1,
    'M':3,
    'N':1,
    'O':1,
    'P':3,
    'Q':10,
    'R':1,
    'S':1,
    'T':1,
    'U':1,
    'V':4,
    'W':4,
    'X':8,
    'Y':4,
    'Z':10
  };
};

// YOUR CODE HERE

Scrabble.prototype.score = function(word) {
  var wordy = word.toUpperCase();
  var score = 0;

  for (var index in wordy) {
    score += this._tilepoints[wordy[index]];
  };
  return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  return 'hello world!';
};

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;
