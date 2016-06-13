var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  // add word to array of played words
  // return word
  (this.hasWon())? false : (scrabble.score(word) !== 'Unacceptable word!!')? this.plays.push(word) : scrabble.score(word);
  return scrabble.score(word);
};

Player.prototype.total_score = function(arrayOfWords) {
  var score = 0;
  for (var word of arrayOfWords) {
    score += scrabble.score(word);
  };
  return score;
};

Player.prototype.hasWon = function() {
  if (this.total_score(this.plays) >= 100) {
    return true;
  } else {
    return false;
  };
};

// Player.prototype.highestScoringWord = function() {
//
// };
//
// Player.prototype.highestWordScore = function() {
//
// };

Player.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Player;
