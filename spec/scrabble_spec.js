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



});
