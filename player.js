var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name =  name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  this.plays.push(word);
}

Player.prototype.wordScores = function() {
  var scores = [];
  for (word of this.plays) {
    scores.push(scrabble.score(word));
  }
  return scores;
}

Player.prototype.totalScore = function() {
  if (this.plays.length <= 0) {
    return 0;
  }

  var current_scores = this.wordScores();

  function sumTotal(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  }
  return current_scores.reduce(sumTotal);
}

Player.prototype.hasWon = function() {
  var won = this.totalScore() >= 100 ? true : false;
  return won;
}

Player.prototype.highestScoringWord = function() {

}

Player.prototype.highestWordScore = function() {

}

module.exports = Player;
