var Scrabble = require("../scrabble.js");
var scrabble = new Scrabble();

describe("score", function() {
  it("returns a number", function() {
    expect(scrabble.score("DOG")).toEqual(jasmine.any(Number)); //to return something of type number
  });

  it("returns the correct score for a word", function() {
    expect(scrabble.score("DOG")).toEqual(5);
  });

  it("is not case-sensitive", function() {
    expect(scrabble.score("dog")).toEqual(5);
  });

  it("will include a 50-point bonus for words of 7 letters or more", function() {
    expect(scrabble.score("aaaaaaa")).toEqual(57);
  });
});

describe("highestScoreFrom", function() {

  it("will return the word with the highest score", function() {
    expect(scrabble.highestScoreFrom(["dog", "zoo"])).toEqual("zoo");
  });

  it("will return the word with 7 letters if multiple words with same score", function() {
    // zzzzzz: 6 letters, 60 pts
    // aaaaaaf: 7 letters, 60 pts (through bonus)
    expect(scrabble.highestScoreFrom(["zzzzzz", "aaaaaaf"])).toEqual("aaaaaaf");
    // making sure order of array is not relevant
    expect(scrabble.highestScoreFrom(["aaaaaaf", "zzzzzz"])).toEqual("aaaaaaf");
  });

  it("will return the first supplied word if multiple words with same length and score", function() {
    expect(scrabble.highestScoreFrom(["zzzzzz", "zzzzzq"])).toEqual("zzzzzz");
    expect(scrabble.highestScoreFrom(["zzzzzq", "zzzzzz"])).toEqual("zzzzzq");
  });

  it("will return the word with fewer tiles if same score but not comparing with 7-letter word", function() {
    // both are 5 points
    expect(scrabble.highestScoreFrom(["dog", "he"])).toEqual("he");
    expect(scrabble.highestScoreFrom(["he", "dog"])).toEqual("he");
  });

});
