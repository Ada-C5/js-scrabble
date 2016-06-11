var Player = function() {
  this.name   = name;
  this.plays  = [];
};

Player.prototype.play = function(word) {
  if(this.hasWon == true) {
    return false;
  } else {
    this.plays.push(word);
  }
};

Player.prototype.total_score = function() {
  var scrabble      = new Scrabble;
  var words_played  = this.name;
  var total         = 0;

  for(var word of words_played){
    total += Number(scrabble.scoreWord(word));
  }
  return total;
};

Player.prototype.hasWon = function() {


};

Player.prototype.highestScoreWord = function() {


};

Player.prototype.highestWordScore = function() {


};

var Scrabble = require ('./scrabble.js');
// creating an instance starting at 0
var scrabble = new Scrabble();

module.exports = Player;
