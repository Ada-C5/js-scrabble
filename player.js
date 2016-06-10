var Scrabble = require("../scrabble.js");

var Player = function(name) {
  this.name = name;
  this.played_words = []
};

Player.prototype.play = function(word) {
  this.played_words.push(word);
  return this.played_words
};



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
