var prompt = require('prompt');

var Scrabble = function() {
  this._points = {
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
};

Scrabble.prototype.score = function(word){
  var score = 0;
  var tiles = 0;

  var word_array = word.toUpperCase().split("");

  for(var char of word_array){
    score += this._points[char] if this._points[char] != NaN;

    tiles += 1;
  };

  if(tiles == 7){
    score += 50;
  };
  return score;
};

function input() {
  prompt.get(['word'], function(error, result) {
  var word = result['word'];
  var scrabble = new Scrabble();
  console.log(scrabble.score(word));
  });

};

module.exports = Scrabble;


prompt.start();
input();
