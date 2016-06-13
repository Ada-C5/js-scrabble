var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name =  name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  this.plays.push(word);
}

Player.prototype.totalScore = function() {
  // console.log("plays: ", this.plays);
  if (this.plays.length <= 0) {
    return 0;
  }
  var scores = [];
  for (word of this.plays) {
    scores.push(scrabble.score(word));
  }
  // console.log("scores: ", scores);

  function sumTotal(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  }
  return scores.reduce(sumTotal);
}

Player.prototype.hasWon = function() {

}

Player.prototype.highestScoringWord = function() {

}

Player.prototype.highestWordScore = function() {

}

module.exports = Player;
