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
    for (var i = 0; i < word.length; i++) {
      this.played_words.push(word[i]);
    }
  }
  else {
    this.played_words.push(word);
  }
  return this.plays();
}

Player.prototype.total_score = function () {
  var scrabble = new Scrabble();
  var sum = 0
  for (var i = 0; i < this.played_words.length; i++) {
    sum += scrabble.score(this.played_words[i]);
  }
  this.score = sum;
  return this.score;
}

Player.prototype.hasWon = function () {
  if (this.score >= 100) {
    return true;
  }
  else {
    return false;
  }
}

var adriana = new Player("Adriana");
adriana.play("cacique");
adriana.play("mezquit");
adriana.play("hat");
// console.log(adriana.plays());

console.log(adriana.total_score());
console.log(adriana.hasWon());

module.exports = Player;
