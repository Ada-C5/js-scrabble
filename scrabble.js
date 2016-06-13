var Scrabble = function() {
  that = this;
};
// YOUR CODE HERE
Scrabble.prototype.bonus = 50;

Scrabble.prototype.scores = {
  A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1, D:2, G:2,
  B:3, C:3, M:3, P:3, F:4, H:4, V:4, W:4, Y:4, K:5, J:8, X:8,
  Q:10, Z:10
};

Scrabble.prototype.score = function(word) {
  if (/[^a-z]/.test(word.toLowerCase()) || word.length > 7) {
    throw new Error("Enter a valid word, please");
  };

  if (word.length == 7) {
    var points = that.bonus;
  } else {
    var points = 0;
  };

  var array = word.toUpperCase().split('');
  //[ 'M', 'E', 'L', 'I', 'S', 'S', 'A' ]
  for(var letter of array) {
    points += that.scores[letter];
  };
  return points;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var scores_array = arrayOfWords.map(function(word) {
   return that.score(word);
 });
  var max = Math.max(...scores_array)
  var winners = arrayOfWords.filter(function(word) { return that.score(word) === max });
  var shortest = winners[0];
  for (var word of winners) {
    if (shortest.length > word.length) {
      shortest = word;
    }
  }
  return shortest.toLowerCase();
};

module.exports = Scrabble;
