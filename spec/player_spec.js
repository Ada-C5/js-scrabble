var Player = require("../player.js");

describe("player object", function() {
  var player = new Player("Jess");

  it("has name attribute that can be called once instatiated", function() {
    expect(player.name).toEqual("Jess");
  });

  it("allows player to play a word and return word and score", function() {
    expect(player.play("monkey")).toEqual("monkey: 15");
  });

  it("adds played words to plays array", function() {
    player.play("kitten");
    player.play("museum");
    expect(player.plays.length).toEqual(3);
  });

  it("throws and error for a word > 7 letters", function() {
    expect(function(){ player.play("developer"); }).toThrow(new Error("You can only enter a word up to seven letters long."));
  });

  it("throws and error for entries that do not containin letters", function() {
    expect(function(){ player.play("%$#@!"); }).toThrow(new Error("That is not valid input!"));
  });

  it("does not add words to plays array that are not valid (from tests above)", function() {
    expect(player.plays.length).toEqual(3);
  });

  it("can calculate total score for all current plays", function() {
    expect(player.totalScore()).toEqual(35);
  });

  it("will return false when player hasn't wont yet", function() {
    expect(player.hasWon()).toBe(false);
  });

  it("can return highest scored word from array of curent plays", function() {
    expect(player.highestScoringWord(this.plays)).toEqual("MONKEY");
  });

  it("can return highest scored word from array of curent plays", function() {
    expect(player.highestWordScore(this.plays)).toEqual(15);
  });

  it("returns false when player tries to play word and they have 100 points or more", function() {
    player.play("waxes");
    player.play("movie");
    player.play("jessica")
    expect(player.play("dog")).toBe(false);
  });

  it("will return true when player has won", function() {
    expect(player.hasWon()).toBe(true);
  });
});