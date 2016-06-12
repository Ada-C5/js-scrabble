var Player = require("../player.js");

describe('Player', function() {
  // setup - new game of Scrabble
  var player = new Player("Bingley");

  it("is present", function(){
    expect(player !== undefined).toEqual(true);
  });

  it('has a name', function() {
    expect(player.name).toEqual("Bingley");
  });

  it('has an array for saving words played by player', function() {
  var plays = [];
    expect(Array.isArray(player.plays)).toEqual(true);
    expect(player.plays).toEqual([]);
  });
});

describe('play function takes a word and stores it in array plays', function() {
    // setup - new game of Scrabble
  var player = new Player("Bingley");

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
  var player = new Player();

  it("is present", function() {
    expect(player.total_score !== undefined).toEqual(true);
  });

  it('returns the zero score when no words are saved', function() {
    expect(player.total_score(player.plays)).toEqual(0);
  });

  it('returns the total score as words are saved', function() {
    expect(player.total_score(player.play("hotdog"))).toEqual(11);
    expect(player.total_score(player.play("chips"))).toEqual(23);
  });
});

describe('indicates whether player has won', function() {
  var player = new Player("");

  it("is present", function() {
    expect(player.hasWon !== undefined).toEqual(true);
  });

  it('returns false if a player has no words played', function() {
    expect(player.hasWon(player.total_score)).toEqual(false);
  });

  it('returns true if a player has won', function() {
    expect(typeof player.hasWon()).toEqual('boolean');
  });



});
