// this is the class declaration
var Scrabble = function() {};

// this is a property of the scrabble function
// this is a class variable
Scrabble.prototype.SEVEN_LETTER_BONUS = 50;

// this is a property of the scrabble function
Scrabble.prototype.score = function(word) {
  var word_score = 0;
  var bonus = this.SEVEN_LETTER_BONUS;

  if (word.match(/^[A-z]+$/)) {
    if (word.length === 7) {
      word_score += bonus;
    }
      var word_array = word.split("");
      var len = word_array.length;
      // i is the iterator
      for (var i = 0; i < len; i++) {
        var temp_letter_val = this.letter_value(word_array[i]);
        // var is not needed as it will redefine the variable
        word_score += temp_letter_val;
    }
  } else if (word === '') {
    throw "empty string";
  } else {
    throw "That is not valid input!";
  }
  return word_score;
};


Scrabble.prototype.letter_value = function(letter) {
   var uppercaseLetter = letter.toUpperCase();
    //  console.log(this.LETTERS[uppercaseLetter]);
   return this.LETTERS[uppercaseLetter];
   };


Scrabble.prototype.highest_score_from = function(word_array) {
  //["risha", "ruby", "black"]
  // score the string and make it a hash. 10 => "risha"
  var by_scores = {}; // empty hash
  for (var i = 0; i < word_array.length; i++) {
    var word = word_array[i]; // "risha"
    var num = this.score(word); // this is a number value
    //10 => "risha"
    if (by_scores[num] == null) { // if the score doesn't exist, then assign the key of the score to the word array
      by_scores[num] = [word]; // { 10 =>["risha"] }
    } else {
      //by_scores={ 10 =>["risha"] }
      //by_scores[10]    = ["risha"]
      by_scores[num].push(word); // .push("sarah")
      //by_scores[10] = ["risha", "sarah"]
      //by_scores={ 10 =>["risha", "sarah"] }
    }
  }
    var highest = Object.keys(by_scores).sort().pop();
    var shortest_word = by_scores[highest][0];
      if (by_scores[highest].length > 1) {
      for ( var j = 0; j < by_scores[highest]; j++) {  //["risha", "sarah"]
        if (by_scores[highest][j].length < shortest_word.length) {
          // re-assignment is =
          shortest_word = by_scores[highest][j];
        }
      }
    }
    return shortest_word;
};

Player = function() {};
var player = new Player();

Scrabble.prototype.name = function(name) {
  
};
// prompt to get the user input
// downcase or uppcase the word, split into an array of letters
// get the score of the one word
// next figure out to get multiple words scored
// set up the hash that stores the letters

// hash = JavaScript object:
Scrabble.prototype.LETTERS = {
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
