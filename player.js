var Scrabble = require("../scrabble.js");
var scrabble = new Scrabble

var Player = function(name) {
  this.name = name;
  this.plays =[];
};

Player.prototype = {

  play: function(word) {
    if (Player.hasWon === true) {
     return false 
    } else {
      this.plays.push(word);
      return word + ": " + scrabble.score(word);
    };
  },

  totalScore: function() {
    
  },

  hasWon: function() {
    if (totalScore >= 100) {
      return true;
    } else {
      return false;
    };
  }
};

module.exports = Player;