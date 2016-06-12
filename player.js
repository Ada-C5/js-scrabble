var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.playedWords = []
};

Player.prototype.play = function(word) {
  this.playedWords.push(word);
  return this.playedWords
};

Player.prototype.totalScore = function(arrayOfWords) {

  var totalScore = new Array; 

  for (var word of arrayOfWords) {
    //kittens = 61, puppies = 63, ducklings = 67
    var score = scrabble.score(word); 
    totalScore.push(score);
  }

  totalScore = totalScore.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }

  return totalScore; 
}; 


module.exports = Player;


// To do 

// total_score(): Function which sums up and returns the score of the players words
// hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
// highestScoringWord(): Function which returns the highest scoring word the user has played.
// highestWordScore(): Function which returns the highestScoringWord score.