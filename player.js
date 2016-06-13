var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this._name = name;
};

// Player.protoype.play = function(word) {
//
// };
//
// Player.prototype.total_score = function() {
//
// };
//
// Player.prototype.hasWon = function() {
//
// };
//
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
