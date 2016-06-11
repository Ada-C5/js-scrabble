var Player = require("../player.js");

describe('Player', function() {
  // setup - new game of Scrabble
  var player = new Player();

  it("is present", function(){
  expect(player !== undefined).toEqual(true);
  });

  it('has a name', function() {
  var player = new Player("Bingley");
  expect(player.name).toEqual("Bingley");
  });

  it('has an array for saving words played by player', function() {
  var plays = [];
  expect(player.plays).toEqual([]);
  });
});

describe('play function takes a word and stores it in array plays', function() {
    // setup - new game of Scrabble
  var player = new Player();

  it("is present", function() {
  expect(player.play !== undefined).toEqual(true);
  });

  it('adds a word and returns the saved words played by player', function() {
  var plays = [];
  expect(player.play("hotdog").length).toEqual(1);
  expect(player.play("chips").length).toEqual(2);
  expect(player.play("soda").length).toEqual(3);
  expect(player.play("beer")).toEqual(["hotdog", "chips", "soda", "beer"]);
  });
});

describe('returns the total score for the player', function() {
    // setup - new game of Scrabble
  var player = new Player();

  it("is present", function() {
  expect(player.total_score !== undefined).toEqual(true);
  });

  it('returns the zero score when no words are saved', function() {
  expect(player.total_score(player.plays)).toEqual(0);
  });
  // expect(player.play("chips").length).toEqual(2);
  // expect(player.play("soda").length).toEqual(3);
  it('returns the score when one word is saved', function() {
  expect(player.total_score(player.play("hotdog"))).toEqual(11);
  expect(player.total_score(player.play("chips"))).toEqual(23);
  });
});
