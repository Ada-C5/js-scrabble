var Scrabble = require("./scrabble.js");

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

var Scrabble = new Scrabble;

Player.prototype.test = function(word) {
  this._word = word;
  return Scrabble.score(this._word);
}

Player.prototype.play = function(word) {
  if (this.total_score() > 100) {
    return false;
  } else {
    this.plays.push(word);
  }
}

Player.prototype.total_score = function() {
  var total_score = 0;

  for (var word of this.plays) {
    total_score += Scrabble.score(word);
  }

  return total_score;
}

Player.prototype.hasWon = function() {
  if (this.total_score() > 100) {
    return true;
  } else {
    return false;
  }
}

Player.prototype.highestScoringWord = function() {
  return Scrabble.highscore(this.plays);
}

Player.prototype.highestWordScore = function() {
  return Scrabble.score(this.highestScoringWord());
}

module.exports = Player;
