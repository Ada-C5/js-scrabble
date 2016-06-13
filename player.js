var Scrabble = require('./scrabble');

var Player = function(name) {
  this.name = name;
  this.plays_array = [];
  this.total_score = 0;
  this.score_hash = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10,
  };
};


Player.prototype.player_name = function() {
  var self = this;
  return self.name;
};

Player.prototype.plays = function() {
  var self = this;
  return self.plays_array;
};

Player.prototype.play = function(word) {
  var self = this
  if (self.hasWon() === true) {
    return false;
  } else {
    self.plays_array.push(word);
    var word_array = word.toUpperCase().split("")
    score_value = 0
    // Applies 50pt bonus for words greater than seven characters long
    if (word_array.length >= 7) {
      score_value += 50;
    }
    word_array.forEach(function(letter) {
      score_value += self.score_hash[letter];
    });
    return score_value;
  }
};

Player.prototype.total_score = function() {
  var self = this
  return self.total_score;
};


Player.prototype.hasWon = function() {
  var self = this
  if (self.total_score >= 100) {
    return true;
  } else {
    return false;
  }
};


// highestScoringWord(): Function which returns the highest scoring word the user has played.


// highestWordScore(): Function which returns the highestScoringWord score.




module.exports = Player;

// Current Test:
var player = new Player("Alysia");
console.log(player.play("hello"))
