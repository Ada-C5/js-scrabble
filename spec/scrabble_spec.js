var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('score(word)', function() {
  var scrabble = new Scrabble();

  it('returns the score 5 for the word dog', function() {
    expect(scrabble.score('dog')).toEqual(5);
  });

  it('is case insensitive', function() {
    expect(scrabble.score('doG')).toEqual(5);
  });

  it('adds a 50 point bonus if a word uses 7 letters', function() {
    expect(scrabble.score('aaaaaaa')).toEqual(57);
  });
});
