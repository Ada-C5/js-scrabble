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
    console.log('YOU WIN');
    return true; 
  } else {
    console.log('You have not won yet.');
    return false; 
  }
};



module.exports = Player;


// To do 

// hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
// highestScoringWord(): Function which returns the highest scoring word the user has played.
// highestWordScore(): Function which returns the highestScoringWord score.