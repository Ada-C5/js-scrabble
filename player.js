Scrabble = require('./scrabble');
var scrabble = new Scrabble();

var Player = function(name){
  this.plays = [];
  this.name  = name;

  this.play = function(word) {
    if (this.hasWon === true) {
      return false;
    }
    this.plays.push(word);
    return this.plays;
  };

  this.total_score = function() {
    var sum = 0;
    for(var word of this.plays){
      sum = sum + scrabble.score(word);
    }
    return sum;
  };

  this.hasWon = function() {
    if (this.total_score() > 100 ){
      return true;
    }
    return false;
  };

  this.highestScoringWord = function() {
    var max = 0,
        word_best = "";
    for(var word of this.plays){
      if (scrabble.score(word) > max) {
        max = scrabble.score(word);
        word_best = word;
      }
    }
    return word_best;
  };

  this.highestWordScore = function() {
    best_word = scrabble.highestScoreFrom(this.plays);
    best_score = scrabble.score(best_word);
    return best_score;
  };


};

module.exports = Player;
// Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned
// Returns false if player has already won
// total_score(): Function which sums up and returns the score of the players words
// hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
// highestScoringWord(): Function which returns the highest scoring word the user has played.
// highestWordScore(): Function which returns the highestScoringWord score.
