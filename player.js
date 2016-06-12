var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.scores = [];
};

Player.prototype = {
  play: function(word) {

    if (this.hasWon() === true) {
      return false;
    } 

    this.plays.push(word);
    this.scores.push(scrabble.score(word));
  },
  total_score: function() {
    var sum = this.scores.reduce(
      function(sum, current){
        return sum + current;
      }, 0);

    return sum;
  },
  hasWon: function() {
    var has_won = false;
    if (this.total_score() >= 100) {
      has_won = true;
    }
    return has_won;
  },
  highestScoringWord: function() {
    var max = 0;
    var index = "No words have been played";
    for (var i = 0; i < this.scores.length; i++) {
      if (this.scores[i] > max) {
        max = this.scores[i];
        index = i;
      }
    }

    return this.plays[index];
  },
  highestWordScore: function() {
    var max = Math.max(...this.scores);
    return max;
  }
}

module.exports = Player;
