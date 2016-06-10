var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('method score(word)', function() {
  var scrabble = new Scrabble();

  it('returns the score 5 for the word dog', function() {
    expect(scrabble.score('dog')).toEqual(5);
  });

  it('is case insensitive', function() {
    expect(scrabble.score('doG')).toEqual(5);
  });
});
