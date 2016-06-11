var Scrabble = require("../scrabble.js");

var test_word = "coffee"
var test_word2 = "tEA"
var seven_letter_word = "affined"
var test_words1 = ["aerugo", "aether", "afeard", "affair", "affect", "affined", "affirm", "afflux", "afford", "affray"]
var test_words2 = ["cat", "jeez", "foot", "furzy", "see"]
var test_words3 = ["cat", "jeez", "foot", "furzy", "see", "bcmpbcg"]
var test_words4 = ["bcmpbcg", "bcmpbcd", "ccmpbcd", "cccpbcd"]
var test_words5 = ["qqqqqq", "bgeeeee", "cat"]

// describe('score_key', function() {
//   var scrabble = new Scrabble();
//
//   it('returns a number score', function() {
//     // console.log(scrabble.getKey(letter1))
//     var letter1 = "A";
//
//     expect(scrabble.getKey(letter1).toEqual(jasmine.any(Number)));
//   });
//
//   it('returns the correct score for the letters A and Z', function() {
//     var letter1 = "A";
//     var letter2 = "Z";
//
//     expect(scrabble.getKey(letter1).toEqual(1));
//     expect(scrabble.getKey(letter2).toEqual(10));
//   });
//
//   it('accepts lower case letter input', function() {
//     var letter1 = "a"
//     var letter2 = "z"
//
//     expect(scrabble.getKey(letter1).toEqual(1));
//     expect(scrabble.getKey(letter2).toEqual(10));
//   });
// });

describe('score', function() {
  var scrabble = new Scrabble();

  it('returns a number', function() {
    expect(scrabble.score("coffee")).toEqual(jasmine.any(Number));
  });

  it('calculates the right score for coffee', function() {
    expect(scrabble.score("coffee")).toEqual(14);
  });

  
});
