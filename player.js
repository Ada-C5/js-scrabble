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
    this.plays.push(word);
  },
  total_score: function() {
    //sums up and returns the score of the player's words
  },
  hasWon: function() {
    // if total_score over 100, return true, otherwise return false
  },
  highestScoringWord: function() {
    // returns the highest scoring word the user has played
  },
  highestWordScore: function() {
    //returns the highestScoringWord's score
  }
}




// temporarily this, if I have time I will use prompt.get for this
var name = "Tom";
// var plays = [];
var player_tom = new Player(name);
