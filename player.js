var Scrabble = require("../scrabble.js");
var scrabble = new Scrabble

var Player = function(name) {
  this.name = name;
  this.plays =[];
};

Player.prototype = {

  play: function(word) {
    if (this.hasWon() === true) {
     return false 
    } else {
      this.plays.push(word);
      return word + ": " + scrabble.score(word);
    };
  },

  totalScore: function() {
    allScores = [];
    for (var word of this.plays) {
      allScores.push(scrabble.score(word));
    };
    return allScores.reduce(function(a, b) { return a + b; }, 0);
  },

  hasWon: function() {
    if (this.totalScore() >= 100) {
      return true;
    } else {
      return false;
    };
  }
};

module.exports = Player;