var Scrabble = require("../scrabble.js");
var scrabble = new Scrabble();

var Player = require("../player.js");
var player = new Player("Val");
var player_two = new Player("Marissa"); // for testing certain other scenarios

describe("Player", function() {
  it("has a name", function() {
    expect(player.name).not.toBeUndefined();
  });

  it("has an array of plays", function() {
    expect(player.plays).toEqual(jasmine.any(Array));
  });

  it("has an empty array when player first initialized", function() {
    expect(player.plays).toEqual([]);
  });
});

describe("play word", function() {
  it("will add the word to the player's played words", function() {
    player.play("dog");
    expect(player.plays).toContain("dog");
  });

  it("will return false if the player has already won", function() {
    player.play("zzzzzzz");
    expect(player.play("dog")).toEqual(false);
  });
});

describe("total_score", function() {
  // using player_two now because otherwise these will add onto the previously
  // declared player's plays array
  it("will return a score of 25 for an array with 5, 5, and 15 points", function() {
    player_two.play("dog");
    player_two.play("cat");
    player_two.play("monkey");
    expect(player_two.total_score()).toEqual(25);
  });
});

describe("hasWon", function() {
  it("will return true if player has over 100 points", function() {
    expect(player.hasWon()).toEqual(true);
  });

  it("will return false if the player has under 100 points", function() {
    expect(player_two.hasWon()).toEqual(false);
  });
});

describe("highestScoringWord", function() {
  it("will return a string, not a number", function() {
    expect(player.highestScoringWord()).toEqual(jasmine.any(String));
  })


  it("will return the highest scoring word the player has played", function() {
    expect(player.highestScoringWord()).toEqual("zzzzzzz");
  });
});

describe("highestWordScore", function() {
  it("will return the score of the highest scoring word", function() {
    expect(player.highestWordScore()).toEqual(120);
  });
});
