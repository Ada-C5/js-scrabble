var Scrabble = require("../scrabble.js");
var Player = require("../player.js");

describe('Player', function() {
  var player = new Player("player_one");

  it('can access the Player module', function() {
    expect(player).toNotEqual(null);
  });

  it('knows its name', function() {
    expect(player.name).toEqual("player_one");
  });

  it('can play a word', function() {
    expect(player.play("cat")).toEqual(["cat"]);
  });

  it('can play another word and remember both', function() {
    expect(player.play("wut")).toEqual(["cat", "wut"]);
  });

  it('knows the words the player has played', function() {
    expect(player.plays).toEqual(["cat", "wut"]);
  });

  it('stores the words the player has played', function() {
    expect(player.plays).toEqual(["cat", "wut"]);
  });

  it('can calculate the players total score', function() {
    expect(player.total_score()).toEqual(11);
  });

  it('can determine a players highest scoring word', function() {
    player.play("jacuzzi");
    expect(player.highestScoringWord()).toEqual("jacuzzi");
  });

  it('can calculate the players total score after adding high-scoring word', function() {
    expect(player.total_score()).toEqual(95);
  });

  it('can determine a players highest scoring word score', function() {
    expect(player.highestWordScore()).toEqual(84);
  });


  it('knows when a player has won', function() {
    player.play('z');
    expect(player.hasWon()).toEqual(true);
  });
  //needs one more test. What test?
});
