var Scrabble() = require("./scrabble.js");

// Constructor: Called when you use new Player(name), sets up an instance with the 
//instance variable name assigned

function Player(name) {
    this.name = name;
    this.plays = [];
    this.numberOfPlays = 0;
    this.won = false;
}

Player.prototype.play = function (word) {
  if (this.total_score(this.plays) < 100 ) {
    this.plays[this.numberOfPlays] = word; 
    this.numberOfPlays++;
    return word;
  } else {
    return false;
  }
}

Player.prototype.total_score = function(arrayOfWords) {
  var score = 0;
  var scrabble = new Scrabble();
  for (var word of arrayOfWords) {
    score = score + scrabble.score(word);
  }

  return score;
}

Player.prototype.hasWon = function () {
  if (this.total_score(this.plays) === 100 || this.total_score(this.plays) > 100) {
    this.won = true;
    return true;
  } else {
    return false;
  }
}

Player.prototype.highestScoringWord = function() {
  var scrabble = new Scrabble();
  return scrabble.highestScoreFrom(this.plays);
}

Player.prototype.highestWordScore = function() {
  var scrabble = new Scrabble();
  return scrabble.score(scrabble.highestScoreFrom(this.plays))
}

module.exports = Player;