var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.plays = function (word) {
  this.plays.push(word);
  return this.plays
}




module.exports = Player;
