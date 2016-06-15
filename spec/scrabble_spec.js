var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  // var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(Scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('Score', function() {
  // var scrabble = new Scrabble();

  it('the word cat is scored as 5', function() {
    expect(Scrabble.score('cat')).toEqual(5);
  });

  it('adds the bonus to "bentley"', function() {
    expect(Scrabble.score('bentley')).toEqual(62)
  });

  it('returns 0 to an empty string', function() {
    expect(Scrabble.score('')).toEqual(0)
  });
});


describe('highestScoreFrom', function() {
  // var scrabble = new Scrabble();

  it('returns "bentley" as the winner between "BENTLEY" and "BELLA"', function() {
    expect(Scrabble.highestScoreFrom(["BENTLEY","BELLA"])).toEqual("BENTLEY")
  });

  it("returns highest scored word as winner", function() {
    expect(Scrabble.highestScoreFrom(["cat", "dog", "ostrich"])).toEqual("ostrich")
  });

  it("chooses shortest word when scores are tied", function() {
    expect(Scrabble.highestScoreFrom(["cat", "bird", "mouse"])).toEqual("bird")
  });

  it("chooses the first word in an array if lengths and score are the same", function() {
   expect(Scrabble.highestScoreFrom(["ladybug", "lodybug"])).toEqual("ladybug")
  });
});
