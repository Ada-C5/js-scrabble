var Scrabble = require("../scrabble.js");

describe("scrabble scoring", function() {
  var scrabble = new Scrabble();

  it("has scoring attribute that is not null", function() {
    expect(scrabble.scoring).toNotBe(null);
  });

  it("returns integer of 50 for bonus", function() {
    expect(scrabble.bonus).toEqual(50);
  });

  it("returns correct score", function() {
    expect(scrabble.score("cat")).toEqual(5);
  });

  it("returns won't return incorrect score", function() {
    expect(scrabble.score("compute")).toNotEqual(15);
  });

  it("returns score with bonus for 7 letter word", function() {
    expect(scrabble.score("queenie")).toEqual(66);
  });

  it("throws and error for word > 7 letters", function() {
    expect(function(){ scrabble.score("developer"); }).toThrow(new Error("You can only enter a word up to seven letters long."));
  });

  it("throws and error for entries not containing letters", function() {
    expect(function(){ scrabble.score("%$#@!"); }).toThrow(new Error("That is not valid input!"));
  });
});

describe("determining scrabble winners", function() {
  var scrabble = new Scrabble();

  it("returns an array with the winner's word and score in a hash", function() {
    expect(scrabble.highestScoreFrom(["cat", "mouse", "kitten"])).toEqual([{ word: "kitten", score: 10 }]);
  });

  it("returns highest scored word as winner", function() {
    expect(scrabble.highestScoreFrom(["cat", "mouse", "queenie"])).toEqual([{ word: "queenie", score: 66 }]);
  });

  it("has precedence for shortest word when scores are tied", function() {
    expect(scrabble.highestScoreFrom(["cat", "bird", "mouse"])).toEqual([{ word: "bird", score: 7 } ]);
  });

  it("has precedence for first word in list if scores and word lengths are equal", function() {
    expect(scrabble.highestScoreFrom(["queenie", "mouse", "jessica"])).toEqual([{ word: "queenie", score: 66 }]);
  });
});
