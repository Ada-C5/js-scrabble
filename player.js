var Scrabble = require("./scrabble.js");
var Scrabble = new Scrabble();

function Player(name) {
  this.name = name;
  this.plays = [];

  this.play = function(word) {
    // Function which will adds the input word to the plays Array
    // Returns false if player has already won
    if (this.hasWon() === true) {
      return false;
    } else {
      this.plays.push(word);
    };
  };

  this.total_score = function() {
    total = 0
    words = this.plays
    for (var word of words) {
      total = total + Scrabble.score(word)
    };
    return total
  };

  this.hasWon = function () {
    if (this.total_score() >=  100){
      return true;
    } else {
      return false;
    }
  };

  this.highestScoringWord = function() {
    //Function which returns the highest scoring word the user has played.
    return Scrabble.highestScoreFrom(this.plays);
  };

  this.highestWordScore = function() {
    word = Scrabble.highestScoreFrom(this.plays)
    return Scrabble.score(word);
  }
}

module.exports = Player;
