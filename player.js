var Scrabble = require("./scrabble.js");
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
      wordScore = scrabble.score(word);
      this.plays.push(word);
      return word + ": " + wordScore;
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
  },

  highestScoringWord: function() {
    highestWord = scrabble.highestScoreFrom(this.plays);
    return highestWord.word;
  },

  highestWordScore: function() {
    highestScore = scrabble.highestScoreFrom(this.plays);
    return highestScore.score;
  }
};

module.exports = Player;
