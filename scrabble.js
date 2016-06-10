var Scrabble = function() {};

Scrabble.prototype.score = function() {
  var word_score = 0
  var bonus = SEVEN_LETTER_BONUS
  if  (word_score + bonus && word.length === 7) {
    var word_array = word.split("");
    var len = word_array.length
    // i is the iterator
    for (var i = 0; i < len; i++) {
      var temp_letter_val = letter_value(i)
      // var is not needed as it will redefine the variable
      word_score += temp_letter_val;
    }
  }
  return word_score;
};


// prompt to get the user input
// downcase or uppcase the word, split into an array of letters
// get the score of the one word
// next figure out to get multiple words scored
// set up the hash that stores the letters

// hash = JavaScript object:
var letters = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
};



module.exports = Scrabble;
