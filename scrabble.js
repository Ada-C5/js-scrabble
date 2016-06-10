
var Scrabble = function(x) {
  this._x = x;
};

Scrabble.prototype = {

  scoring: {
    "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2,
    "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8,
    "Q": 10, "Z": 10
  },

  bonus: 50,

  score: function(_x) {
    var word = _x;

    if (word.length > 7) {
        throw "You can only enter a word up to seven letters long."
    };

    var wordArray = word.toUpperCase().split('');

    var points = 0;
    if (word.length == 7) {
      points += Scrabble.prototype.bonus;
     }; 

    for (var letter of wordArray) {
      points += Scrabble.prototype.scoring[letter];
    };

    return points; 
    },

  highestScoreFrom: function(_x) {
    var arrayOfWords = _x;

    var allScores = [];
      for (var word in arrayOfWords) {
        allScores.push(Scrabble.prototype.score(word));
      };

    var pairs = allScores.map { function(arrayOfWords) {}};
    // example: [[59, "pull"], [43, "cat"], [59, "yes"], [3, "andrea"], [7, "carlos"]]
    // winners = []

    // pairs.each do |pair|
    //   if pair[0] == pairs.max[0]
    //     winners << pair
    //   end
    // end
    //  winners
    // tie_winner = winners.min_by do |winner|
    //   winner[1].size
    // end
    // return tie_winner[1]
    return pairs;
  }
};

module.exports = Scrabble;


