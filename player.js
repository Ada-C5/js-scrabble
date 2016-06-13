var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

function Player(name) {
  // still not sure when to use private variables.. I want to be able to check the current player's plays, so no underscore I think?
  this.name = name;
  this.plays = [];
}

Player.prototype = {
  // adds the input word to the player's array
  play: function(word) {
    if (this.hasWon() === true) {
      return false;
    } else {
      this.plays.push(word);
    }
  },
  //sums up and returns the score of the player's words
  total_score: function() {
    // makes an array of the scores for each word the player has played
    all_scores = [];
    for (var word of this.plays) {
      all_scores.push(scrabble.score(word));
    }
    // adds them up
    total_score = 0;
    for (var score of all_scores) {
      total_score += score;
    }
    return total_score;
  },
  hasWon: function() {
    // if total_score over 100, return true, otherwise return false
    if (this.total_score() > 100) {
      return true;
    } else {
      return false;
    }
  },
  highestScoringWord: function() {
    // returns the highest scoring word the user has played
    return scrabble.highestScoreFrom(this.plays);
  },
  highestWordScore: function() {
    // returns the highestScoringWord's score
    return scrabble.score(this.highestScoringWord());
  }
}

module.exports = Player;
