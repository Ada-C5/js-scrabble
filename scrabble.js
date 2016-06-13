var Scrabble = function() {};

Scrabble.prototype = {

  scoring: {
    "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2,
    "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8,
    "Q": 10, "Z": 10
  },

  bonus: 50,

  score: function(word) {
    if (word.length > 7) {
      throw "You can only enter a word up to seven letters long."
    };

    if (word.match(/^[A-z]+$/)) {
      var word = word.toUpperCase();
      var points = 0;
      if (word.length === 7) {
        points += this.bonus;
      }; 

      for (var letter of word) {
        points += this.scoring[letter];
      };

      return points; 

    } else {
      throw "That is not valid input!"
    };
  },

  highestScoreFrom: function(arrayOfWords) {
    var winner = "none";
    for (var word of arrayOfWords) {
      var word = word.toUpperCase()
      // add an initial winning word 
      // if current word score > current winning word's score, add it
      if (winner === "none" || this.score(word) > winner.score) {
        winner = {
          "word": word, 
          "score": this.score(word)
        };
        // if there is a tie, preference given to:
        // shorter word
        // unless word length is 7, then that word wins
        // if words are same length, the first in the list wins
      } else if (this.score(word) === winner.score) {
        if (winner.word.length > word.length) {
          winner = {
            "word": word, 
            "score": this.score(word)
          }; 
        } else if (winner.word.length === word.length || winner.word.length < word.length) {
          winner = {
            "word": winner.word,
            "score": winner.score
          };
        };
      };
    };
    return winner;
  }
};

module.exports = Scrabble;


