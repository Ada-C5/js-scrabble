var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype.LETTER_SCORES = {a : 1, b : 3, c : 3, d : 2, e : 1, f : 4, g : 2,
  h : 4,  i : 1,  j : 8,  k : 5,  l : 1,  m : 3,  n : 1,  o : 1,  p : 3,
  q : 10, r : 1, s : 1,  t : 1,  u : 1,  v : 4,  w : 4,  x : 8,  y : 4,
  z : 10}

Scrabble.prototype.wordScore = function(word) {
  var points = 0;
  if (word.length === 0) {
    return 0;
  } else {
  // var score = 50 if (bonus == "true" && word.length == BONUS_NUMBER_OF_LETTERS)
    var wordLowercase = word.toLowerCase().split('');
    for(var letter of wordLowercase) {
      // console.log(letter)
      // console.log(this.letterScores[letter])
      var points = points + this.LETTER_SCORES[letter]
    }
    return points;
  }
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  arrayofScores = []
  for (var word of arrayOfWords) {
    arrayofScores.push(this.wordScore(word));
  }
  var max = Math.max(...arrayofScores);
  return max;
};


Scrabble.prototype.bonusScore = 7

module.exports = Scrabble;
