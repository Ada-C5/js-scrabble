var Scrabble() = require("./scrabble.js");

// Constructor: Called when you use new Player(name), sets up an instance with the 
//instance variable name assigned

function Player(name) {
    this.name = name;
    this.plays = [];
    this.numberOfPlays = 0;
}

Player.prototype.play = function (word) {
  this.plays[this.numberOfPlays] = word; 
  this.numberOfPlays++;
}

Player.prototype.total_score = function(arrayOfWords) {
  var score = 0;
  var scrabble = new Scrabble();
  for (var word of arrayOfWords) {
    score = score + scrabble.score(word);
  }

  return score
}

// Player.prototype.total_score = function(arrayOfWords) {
//   // var scrabble = new Scrabble();
//   var score = 0;
//   function (arrayOfWords) {
//     for (var word of arrayOfWords) {
//       score = score + scrabble.score(word);
//     }
//   }
//   return score;
// }



// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player
// play(word): Function which will adds the input word to the plays Array
// Returns false if player has already won
// total_score(): Function which sums up and returns the score of the players words
// hasWon(): Function with logic to determine if the player has over 100 points, 
// returns true, otherwise returns 'false'
// highestScoringWord(): Function which returns the highest scoring word the user has played.
// highestWordScore(): Function which returns the highestScoringWord score.


module.exports = Player;