var Scrabble = require("../scrabble.js");

describe('Score a word', function() {
  // setup - new game of Scrabble
  var scrabble = new Scrabble();
  
  it('returns the total points for a single word', function() {
    expect(scrabble.wordScore("charles")).toEqual(12);
  });


});
