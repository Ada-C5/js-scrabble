var Scrabble = require("../scrabble.js");

describe("scrabble scoring", function() {
  var scrabble = new Scrabble();

  it("has a scoring attribute that is defined", function() {
    expect(scrabble.scoring).toBeDefined();
  });

  it("returns an integer of 50 for bonus", function() {
    expect(scrabble.bonus).toEqual(50);
  });

  it("returns a correct score", function() {
    expect(scrabble.score("cat")).toEqual(5);
  });

  it("won't return an incorrect score", function() {
    expect(scrabble.score("compute")).toNotEqual(15);
  });

  it("returns a score with a 50 point bonus for 7-letter word", function() {
    expect(scrabble.score("queenie")).toEqual(66);
  });

  it("is case insensitive for capitalized entries", function() {
    expect(scrabble.score("HELLO")).toEqual(8);
  });

  it("is case insensitive for lowercase entries", function() {
    expect(scrabble.score("hello")).toEqual(8);
  });

  it("is case insensitive for mixed case entries", function() {
    expect(scrabble.score("heLLo")).toEqual(8);
  });

  it("throws an error for a word > 7 letters long", function() {
    expect(function(){ scrabble.score("developer"); }).toThrow(new Error("You can only enter a word up to seven letters long."));
  });

  it("throws an error for entries not containing letters", function() {
    expect(function(){ scrabble.score("%$#@!"); }).toThrow(new Error("That is not valid input!"));
  });
});

describe("determining scrabble winners", function() {
  var scrabble = new Scrabble();

  it("returns an array with the winner's word and score in a hash", function() {
    expect(scrabble.highestScoreFrom(["cat", "mouse", "kitten"])).toEqual({ word: "KITTEN", score: 10 });
  });

  it("returns highest scored word as the winner", function() {
    expect(scrabble.highestScoreFrom(["cat", "mouse", "queenie"])).toEqual({ word: "QUEENIE", score: 66 });
  });

  it("has precedence for shortest word when scores are tied", function() {
    expect(scrabble.highestScoreFrom(["cat", "bird", "mouse"])).toEqual({ word: "BIRD", score: 7 });
  });

  it("has precedence for first word in list if scores and word lengths are equal", function() {
    expect(scrabble.highestScoreFrom(["queenie", "mouse", "jessica"])).toEqual({ word: "QUEENIE", score: 66 });
  });
});
