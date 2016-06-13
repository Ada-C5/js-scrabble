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
  console.log("plays: ", this.plays);
  var scores = [];
  for (word of this.plays) {
    scores.push(scrabble.score(word));
  }
  console.log("scores: ", scores);

  function sumTotal(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  }
  console.log(scores.reduce(sumTotal));
  console.log(Player.prototype);
  return scores.reduce(sumTotal);
}

Player.prototype.hasWon = function() {

}

Player.prototype.highestScoringWord = function() {

}

Player.prototype.highestWordScore = function() {

}

module.exports = Player;
