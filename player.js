var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.playedWords = new Array; 
};

Player.prototype.play = function(word) {
  this.playedWords.push(word);
  return this.playedWords; 
};

Player.prototype.totalScore = function(arrayOfWords) {
  var totalScore = new Array; 

  for (var word of arrayOfWords) {
    var score = scrabble.score(word); 
    totalScore.push(score);
  }
  totalScore = totalScore.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  return totalScore; 
}; 

Player.prototype.hasWon = function(arrayOfWords) {
  if (this.totalScore(arrayOfWords) >= 100) {
    return true; 
  } else {
    return false; 
  }
};

Player.prototype.highestScoringWord = function(playedWords) {
  var highestScoringWord = scrabble.highestScoreFrom(playedWords); 
  return highestScoringWord; 
}; 

Player.prototype.highestWordScore = function(playedWords) {
  var highestScoringWord = scrabble.highestScoreFrom(playedWords); 
  var score = scrabble.score(highestScoringWord); 
  return score; 
}; 

module.exports = Player;
