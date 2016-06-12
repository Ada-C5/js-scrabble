var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name, plays = []) {
  this.name = function() { return name };
  this.plays = function() { return plays };
};

// Player.prototype.play(word) = function() {
//   // adds the input word to the player's array
// };




// temporarily this, if I have time I will use prompt.get for this
var name = "Tom";
// var plays = [];
var player_tom = new Player(name);
