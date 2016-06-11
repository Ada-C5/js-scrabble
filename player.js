var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.played_words = [];
};

Player.prototype.plays = function () {
  return this.played_words;
}

Player.prototype.play = function (word) {
  if (typeof word === "object") {
    for (i = 0; i < word.length; i++) {
      this.played_words.push(word[i]);
    }
  } else {
    console.log(typeof word);
    this.played_words.push(word);
  }
}

// var adriana = new Player("Adriana");
// console.log(adriana.name === "Adriana");
// console.log(adriana.name);
// console.log(adriana.plays("cat"));
// console.log(adriana.plays(["hat", "bat", "hello", "world"]));

module.exports = Player;
