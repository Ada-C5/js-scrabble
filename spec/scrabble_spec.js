var Scrabble = require("../scrabble.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  it('can return score for a basic word', function() {
    expect(scrabble.score("ada")).toEqual(3);
  });

  it('will give bonus for 7 letter word'), function() {
    expect(scrabble.score("aaaaaaa")).toEqual(57);
  };

  it("will return 0 for empty string"), function() {
    expect(scrabble.score("")).toEqual(0);
  }

  it('can handle words with mixed upper and lower case'), function() {
    expect(scrabble.score("aDeI")).toEqual(4);
  }

  it('can return highest scoring words from array of words'), function() {
    expect(scrabble.highestScoreFrom(["a", 'd', 'zzz'])).toEqual("zzz");
  }


});
