var Scrabble = require("../scrabble.js");

// describe('Hello World', function() {
//   var scrabble = new Scrabble();
//
//   it('says hello world', function() {
//     expect(scrabble.helloWorld()).toEqual('hello world!');
//   });
// });

describe('Scrabble', function() {
  var scrabble = new Scrabble();

    it('can access the Scrabblemodule', function() {
    expect(scrabble).toNotEqual(null);
  });

    it('errors out if non-letters are submitted', function() {
    expect(scrabble.score("sjgno33")).toEqual("That is not a word!");
  });

    it('takes in a string and returns a number', function() {
    expect(scrabble.score("cat")).toEqual(5);
  });

    it('is case-insensitive', function() {
    expect(scrabble.score("CaT")).toEqual(5);
  });
});

describe('highest scoring word from array', function() {
  var scrabble = new Scrabble();

    it('returns highest scoring word from array of words', function() {
    expect(scrabble.highestScoreFrom(["cat", "dog", "jacuzzi"])).toEqual("jacuzzi");
  });

    it('returns highest scoring word with fewest letters from array of words including dupicate score', function() {
    expect(scrabble.highestScoreFrom(["cat", "dog", "god", "met", "k"])).toEqual("k");
  });

    it('returns first word of two equally scored/length words in a collection', function() {
    expect(scrabble.highestScoreFrom(["cat", "dog", "god", "met"])).toEqual("cat");
    });

    it('returns first word of two equally scored 7 letter words in a collection', function() {
    expect(scrabble.highestScoreFrom(["zizzled", "jazzily", "quizzed", "cat"])).toEqual("zizzled");
    });


});
