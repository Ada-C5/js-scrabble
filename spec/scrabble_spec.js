var Scrabble = require("../scrabble.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();
  var word = "cat";

  it('scores a given word', function() {
    expect(scrabble.score(word)).toEqual(5);
  });
});
