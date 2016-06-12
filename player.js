var Scrabble = require("./scrabble.js");
var game = new Scrabble();

var Player = function(name, plays) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    if (this.hasWon() === true) {
      return false;
    }
    else {
      this.plays.push(word);
    };
  },

  total_score: function() {
    var total = 0
    for (var word of this.plays) {
      total += game.score(word);
    }
    return total;
  },

  hasWon: function() {
    if (this.total_score() > 100) {
      return true;
    }
    else {
      return false;
    };
  },

  highestScoringWord: function() {
    return game.highestScoringWordFromArray(this.plays);
  },

  highestWordScore: function() {
    return game.highestWordScoreFromArray(this.plays);
  }
};

module.exports = Player;
