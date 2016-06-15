var Scrabble = require("./scrabble.js");

function Player(name) {
  this.name = name;
  this.plays= [];

};

// prototype makes it an instance method
Player.prototype.play = function(word) {
  if(this.hasWon() !== true) {
    this.plays.push(word)
  } else {
    return false
  };
  //returns false if player has already won
};

//total_score(): Function which sums up and returns the score of the players words
Player.prototype.total_score = function() {
  total = 0
  for(var word of this.plays) {
   total = total + Scrabble.score(word)
  };
  return total;
};

//hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'

Player.prototype.hasWon = function() {
  var total_points = this.total_score()

  if (total_points >= 100) {
    return true;
  } else {
    return false;
  }

};

//highestScoringWord(): Function which returns the highest scoring word the user has played.

Player.prototype.highestScoringWord = function() {

  return Scrabble.highestScoreFrom(this.plays);

};

//highestWordScore(): Function which returns the highestScoringWord score.

Player.prototype.highestWordScore = function() {
  highest_scoring_word = this.highestScoringWord()

  return Scrabble.score(highest_scoring_word);

};


module.exports = Player;

// function Player(name) {
//   name: name,
//   plays: [];
// };
