
var Scrabble = require('./scrabble'),
  game = new Scrabble(),
  wordsPlayed = new Array(),
  player_points = null;

var Player = function(name) {
  this._name = name;
  that = this;
};

Player.prototype.name = function() {
  return this._name;
};

Player.prototype.plays = function() {
  // plays: property which returns an Array of the words played by the player
  return wordsPlayed
};

Player.prototype.play = function(word) {
  // play(word): Function which will adds the input word to the plays Array
  // Returns false if player has already won

 if (this.hasWon() === false ){
   wordsPlayed.push(word);
   return true
 } else if (that.hasWon === true) {
   return false
  };
};

Player.prototype.total_score = function() {
  // total_score(): Function which sums up and returns the score of the players words
  var scores = wordsPlayed.map(function(word) {
   return game.score(word);
  })
  //Using fancy arrow functions introduced in ES6:
  var player_points = scores.reduce((a, b) => a + b, 0);

  return player_points
};

Player.prototype.hasWon = function() {
  // hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
  if (that.total_score() > 100) {
    return true
  } else {
    return false
  }
};

Player.prototype.highestScoringWord = function() {
  // highestScoringWord(): Function which returns the highest scoring word the user has played.
};

Player.prototype.highestWordScore = function() {
  // highestWordScore(): Function which returns the highestScoringWord score.
};

module.exports = Player;
