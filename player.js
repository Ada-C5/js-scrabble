var Scrabble = require("./scrabble.js");

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.test = function(word) {
  return Scrabble.score(word)
}

Player.prototype.play = function(word) {
  this.plays.push(word);
  //returns false if player has already won
}

Player.prototype.total_score = function() {
  this.plays.push(word);
  // - `total_score()`: Function which sums up and returns the score of the players words
}

Player.prototype.hasWon = function() {
  this.plays.push(word);
  // Function with logic to determine if the player has over 100 points,
  // returns `true`, otherwise returns 'false'
}

Player.prototype.highestScoringWord = function() {
  this.plays.push(word);
  // Function which returns the highest scoring word the user has played.
}

Player.prototype.highestWordScore = function() {
  this.plays.push(word);
  // Function which returns the `highestScoringWord` score.
}

module.exports = Player;
