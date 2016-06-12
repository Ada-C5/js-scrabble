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
  if (this.hasWon() === true) {
    return false
  }
  if (typeof word === "object") {
    for (var i = 0; i < word.length; i++) {
      this.played_words.push(word[i]);
    }
  }
  else {
    this.played_words.push(word);
  }
  this.total_score()
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

Player.prototype.highestScoringWord = function () {
  var scrabble = new Scrabble();
  var high_word = "";
  
  high_word = scrabble.highestScoreFrom(this.played_words);
  return high_word;
}

var adriana = new Player("Adriana");
console.log(adriana.play("warrior"));
// console.log(adriana.play("cats"));
// console.log(adriana.play("are"));
// console.log(adriana.play("awesome"));
// console.log(adriana.plays())

console.log(adriana.highestScoringWord());

// console.log(adriana.plays());
// console.log(adriana.total_score());
// console.log(adriana.hasWon());

module.exports = Player;
