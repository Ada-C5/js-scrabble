var PlayerPrototype = {
  name: null,
  plays: []
}

var Player = function(name) {
  this.name =  name;
};
Player.prototype = PlayerPrototype;


Player.prototype.play = function(word) {
  this.plays.push('word')
}

Player.prototype.totalScore = function() {

}

Player.prototype.hasWon = function() {

}

Player.prototype.highestScoringWord = function() {

}

Player.prototype.highestWordScore = function() {

}

module.exports = Player;
