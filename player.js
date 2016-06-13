// require_relative '/scrabble'

var Player = function(name) {
  this.name = name;
  this.plays_array = [];
  this.total_score = 0;

};


Player.prototype.player_name = function() {
  var self = this;
  return self.name;
};

// plays: property which returns an Array of the words played by the player
Player.prototype.plays = function() {
  var self = this;
  return self.plays_array;
};

// play(word): Function which will adds the input word to the plays Array
// Returns false if player has already won
Player.prototype.play = function(word) {
  plays_array.push(word);
};


// total_score(): Function which sums up and returns the score of the players words


// hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
Player.prototype.hasWon = function() {
  if (player.total_score >= 100) {
    return true;
  } else {
    return false;
  }
};


// highestScoringWord(): Function which returns the highest scoring word the user has played.


// highestWordScore(): Function which returns the highestScoringWord score.




module.exports = Player;

// Current Test:
var player = new Player("Alysia");
