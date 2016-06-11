var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.played_words = [];
};

Player.prototype.plays = function (word) {
  if (typeof word === "array") {
    for (i = 0; i < word.length; i++) {
      this.plays.push(i);
    }
  } else {
    console.log(word);
    this.played_words.push(word);
  }
  return this.played_words;
}

var adriana = new Player("Adriana");
console.log(adriana.name);
console.log(adriana.plays("cat"));

module.exports = Player;
