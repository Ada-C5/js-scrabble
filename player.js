var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

function Player(name) {
  // still not sure when to use private variables.. I want to be able to check the current player's plays, so no underscore I think?
  this.name = name;
  this.plays = [];
}

Player.prototype = {
  play: function(word) {
    this.plays.push(word);
  }
}


// Player.prototype.play = function(word) {
//   console.log(this.plays);
//   // adds the input word to the player's array
//   // this.plays.push(word);
// };




// temporarily this, if I have time I will use prompt.get for this
var name = "Tom";
// var plays = [];
var player_tom = new Player(name);
