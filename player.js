var Scrabble = require("./scrabble.js");

var Player = function(name) {
  this.name = name;
  this.played_words = [];
  this.score = 0
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

Player.prototype.total_score = function () {
  var scrabble = new Scrabble();
  var sum = 0
  for (i = 0; i < this.played_words.length; i++) {
    sum += scrabble.score(this.played_words[i]);
  }
  this.score = sum;
  return this.score;
}

var adriana = new Player("Adriana");
console.log();

module.exports = Player;
