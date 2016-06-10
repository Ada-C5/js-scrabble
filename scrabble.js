var Scrabble = function() {
  that = this;
};
// YOUR CODE HERE
var bonus = 50;
var scores = {
  'A':1, 'E':1, 'I':1, 'O':1, 'U':1, 'L':1, 'N':1, 'R':1, 'S':1, 'T':1, 'D':2, 'G':2,
  'B':3, 'C':3, 'M':3, 'P':3, 'F':4, 'H':4, 'V':4, 'W':4, 'Y':4, 'K':5, 'J':8, 'X':8,
  'Q':10, 'Z':10
};


Scrabble.prototype.score = function(word) {
  var array = word.toUpperCase().split('');
  //[ 'M', 'E', 'L', 'I', 'S', 'S', 'A' ]
  var points = 0;
  for(var letter of array) {
    points += scores[letter];
  };
  return points;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  // arrayOfWords = "david jimison"
  var words_array = arrayOfWords.split(' ');
  // ["david", "jimison"]
  var scores_array = words_array.map(function(word) {
   return that.score(word);
 });
  var max = Math.max(...scores_array);
  var index_max = scores_array.indexOf(max)
  return words_array[index_max]
};


module.exports = Scrabble;
