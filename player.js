
var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble

function Player(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  this.plays.push(word);
};

Player.prototype.total_score = function() {
  var total = 0;
  for (var word of this.plays) {
    total += scrabble.score(word);
  };
  return total;
};

Player.prototype.hasWon = function() {
  var total = Player.total_score;
  if (total >= 100) {
    return true;
  } else {
    return false;
  };
};

Player.prototype.highestScoringWord = function() {
  var obj = scrabble.highestScoreFrom(this.plays);
  return obj.word;
};

Player.prototype.highestWordScore = function() {
  var obj = scrabble.highestScoreFrom(this.plays);
  return obj.score;
};

module.exports = Player;
