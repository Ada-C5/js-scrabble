var Scrabble = require("../scrabble.js");

describe('Score a word', function() {
  // setup - new game of Scrabble
  var scrabble = new Scrabble();

  it('returns the total points for a single word', function() {
    expect(scrabble.wordScore("charles")).toEqual(62);
  });

  it('returns zero for an empty input', function() {
    expect(scrabble.wordScore("")).toEqual(0);
  });

  it('returns the total points for a single word regadless of case', function() {
    expect(scrabble.wordScore("CHARLES")).toEqual(62);
  });

  it('returns the total points for a single word with bonus', function() {
    expect(scrabble.wordScore("tacocat")).toEqual(61);
  });


//
// describe('find', function() {
//     // setup - new game of Scrabble
//   var scrabble = new Scrabble();
//
//   it('returns the total points for a single word', function() {
//     expect(scrabble.wordScore("charles")).toEqual(12);
//   });
//
//
});
