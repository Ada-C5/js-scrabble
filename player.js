var Scrabble = require("../scrabble.js");

var Player = function(name) {
  this.name = name;
  this.playedWords = []
};

Player.prototype.play = function(word) {
  this.playedWords.push(word);
  return this.playedWords
};



module.exports = Player;