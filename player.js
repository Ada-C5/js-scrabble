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
    this.played_words.push(word);
  }
  return this.plays();
}

var adriana = new Player("Adriana");
console.log(adriana.play("cat"));
console.log(adriana.play(["hat", "bat", "hello", "world"]));

module.exports = Player;
