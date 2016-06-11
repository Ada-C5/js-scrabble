var Scrabble = require("../scrabble.js");

describe('score', function() {
  var scrabble = new Scrabble();

  it('returns a number', function() {
    expect(scrabble.score("coffee")).toEqual(jasmine.any(Number));
  });

  it('calculates the right score for coffee', function() {
    expect(scrabble.score("coffee")).toEqual(14);
  });

  
});
