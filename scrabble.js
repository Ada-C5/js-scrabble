var Scrabble = function() {};

// YOUR CODE HERE
var Tilebag = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1
};

var score = function(word){
  // The word is input as a string (case insensitive).
  var word_array = word.toUpperCase().split(""),
      word_score = 0;

  if(word.length <= 7){
    for(var letter of word_array){
      word_score += Tilebag[letter];
    }

  // seven letter word gets 50point bonus
    if(word.length == 7){
      word_score += 50;
    } else {
      word_score;
    }
  };
  // returns the total score value for the given word.
  return word_score;
}



var highestScoreFrom = function(arrayofWords){

}

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};



module.exports = Scrabble;
