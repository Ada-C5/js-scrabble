var prompt = require('prompt');

var Scrabble = function() {};
// s = new Scrabble
// s.helloWorld

Scrabble.prototype.helloWorld = function() {
  console.log('hello world!');
};

Scrabble.prototype.score = function(word) {
  console.log(word);
};

module.exports = Scrabble;
