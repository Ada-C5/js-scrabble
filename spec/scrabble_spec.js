var Scrabble = require("../scrabble.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  it('can score a word correctly', function() {
    expect(scrabble.score("ada")).toEqual(4);
  });

  it('can score a word correctly and is case insensitive', function() {
    expect(scrabble.score("aDa")).toEqual(4);
  });

  it('can return the highest scoring word from array', function() {
    expect(scrabble.highestScoreFrom(["EEEEEF", "AAAAAF", "QQQQQQ"])).toEqual("QQQQQQ");
  });

  it('gives bonus of 50 points to words with 7 tiles', function() {
    expect(scrabble.score("penguin")).toEqual(60);
  });

  it('gives bonus of 50 points to words with 7 tiles', function() {
    expect(scrabble.score("aAaAaAa")).toEqual(57);
  });

  it('chooses the word with fewest tiles between equally scoring words', function() {
    expect(scrabble.highestScoreFrom(["AAAA", "DD", "EEEE"])).toEqual("DD");
  });

  it('chooses the word with exactly 7 tiles between equally scoring words', function() {
    expect(scrabble.highestScoreFrom(["EEEEEEF", "AAAAAAF", "QQQQQQ"])).toEqual("EEEEEEF");
  });

  it('chooses the first word between equally scoring words of smae length', function() {
    expect(scrabble.highestScoreFrom(["EEE", "AAA", "NNN"])).toEqual("EEE");
  });
});
