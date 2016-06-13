var Player = function(name) {
  this.name = name;
  this.plays = []
};

Player.prototype.play = function(word) {
  if (this.hasWon() === true) {
    return false;
  } else {
    this.plays.push(word);
    return this.plays
  }
};

Player.prototype.total_score = function() {
  total_score = 0;
  var Scrabble = require("./scrabble.js");
  var scrabble = new Scrabble();
  for (var word of this.plays) {
    total_score += scrabble.score(word);
  };
  return total_score;
};

Player.prototype.hasWon = function() {
  if (this.total_score >=100) {
    return true;
  } else {
    return false;
  };
};

Player.prototype.highestScoringWord = function() {
  var Scrabble = require("./scrabble.js");
  var scrabble = new Scrabble();
  return scrabble.highestScoreFrom(this.plays)
}

Player.prototype.highestWordScore = function() {
  var Scrabble = require("./scrabble.js");
  var scrabble = new Scrabble();
  best_word = this.highestScoringWord();
  return scrabble.score(best_word);
}

module.exports = Player;


//
// Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// play(word): Function which will adds the input word to the plays Array
// plays: property which returns an Array of the words played by the player
// Returns false if player has already won
// total_score(): Function which sums up and returns the score of the players words
// hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
// highestScoringWord(): Function which returns the highest scoring word the user has played.
// highestWordScore(): Function which returns the highestScoringWord score.
