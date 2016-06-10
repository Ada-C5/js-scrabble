var Scrabble = require("../scrabble.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  it('can return score for a basic word', function() {
    expect(scrabble.score("ada")).toEqual(4);
  });

  it('will give bonus for 7 letter word'), function() {
    expect(scrabble.score("aaaaaaa")).toEqual(57);
  };

  it("will return 0 for empty string"), function() {
    expect(scrabble.score("")).toEqual(0);
  };

  it('can handle words with mixed upper and lower case'), function() {
    expect(scrabble.score("aDeI")).toEqual(4);
  };

  it('can return highest scoring words from array of words'), function() {
    expect(scrabble.highestScoreFrom(["a", 'd', 'zzz'])).toEqual("zzz");
  };

  it('if tie,should return the highet score with the fewest tiles'), function() {
    expect(scrabble.highestScoreFrom(["ATONE", "PEE", "HI"])).toEqual('HI');
  };

  it("when multiple words that are equal in value, return the word with the length 7 tiles"), function() {
    expect(scrabble.highestScoreFrom(["ZZZZZZ", "AEIOUTF", "AEIOUTH"])).toEqual("AEIOUTF");
  };

  it('returns first word when length are same and there is no 7 tile word'), function() {
    expect(scrabble.highestScoreFrom(["e", 'a'])).toEqual('e');
  }


});
