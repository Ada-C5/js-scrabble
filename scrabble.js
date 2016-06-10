var Scrabble = function() {};

// setup score key
var score_key = {
  setValue: function(props, value) {
      while (props.length) this[ props.pop()] = value;
  }
}
// scoring letters (input)
var letters = [
  ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  ["D", "G"],
  ["B", "C", "M", "P"],
  ["F", "H", "V", "W", "Y"],
  ["K"],
  ["J", "X"],
  ["Q", "Z"]
];
// scoring values (output)
var values = [1, 2, 3, 4, 5, 8, 10];
// set scores in score_key object
for (var i = 0; i < letters.length; i++) {
  score_key.setValue(letters[i], values[i]);
}

// actually do stuff now

Scrabble.prototype.score = function(word) {
  word = word.toUpperCase();
  var running_score = 0
  for (var letter of word) {
    running_score += score_key[letter];
  }
  return running_score;
}

var scrabble = new Scrabble();

scrabble.score("coffee")















module.exports = Scrabble;
