var Scrabble = require('./scrabble'),
    game = new Scrabble(),
    TileBag = require('./tilebag'),
    tilebag = new TileBag(),
    wordsPlayed = new Array();

var Player = function(name) {
  this._name = name;
};

Player.prototype.name = function() {
  return this._name;
};

Player.prototype.player_points = 0;

Player.prototype.plays = function() {
  // plays: property which returns an Array of the words played by the player
  return wordsPlayed
};

Player.prototype.play = function(word) {
  // play(word): will adds the input word to the plays Array
  // Returns false if player has already won
 if (this.hasWon() === false ){
   tilebag.drawtiles(word);
   wordsPlayed.push(word);
   return true
 } else if (this.hasWon() === true) {
   wordsPlayed.push(word);
   return false
  };
};

Player.prototype.total_score = function() {
  // total_score(): sums up and returns the score of the players words
  var scores = wordsPlayed.map(function(word) {
   return game.score(word);
  });
  //Using fancy arrow functions introduced in ES6:
  this.player_points = scores.reduce((a, b) => a + b, 0);
  return this.player_points
};

Player.prototype.hasWon = function() {
  // hasWon(): logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
  if (this.total_score() > 100) {
    //empty the wordsPlayed???
    return true
  } else {
    return false
  }
};

Player.prototype.highestScoringWord = function() {
  // highestScoringWord(): returns the highest scoring word the user has played.
  return game.highestScoreFrom(wordsPlayed)
};

Player.prototype.highestWordScore = function() {
  // highestWordScore(): returns the highestScoringWord score.
  var highestWord = this.highestScoringWord()
   score = game.score(highestWord)
   return score
};

module.exports = Player;
