var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('Scrabble', function() {
  var scrabble = new Scrabble();

    it('errors out if non-letters are submitted', function() {
    expect(scrabble.score("sjgno33")).toEqual("That is not a word!");
  });

    it('takes in a string and returns a number', function() {
    expect(scrabble.score("cat")).toEqual(5);
  });
});

describe('highest scoring word from array', function() {
  var scrabble = new Scrabble();

    it('returns highest scoring word from array of words', function() {
    expect(scrabble.highestScoreFrom(["cat", "dog", "jacuzzi"])).toEqual("jacuzzi");
  });
});
