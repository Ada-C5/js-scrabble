// Minimum of 11 tests

var Player = require("../player.js");

describe('Player name', function() {
  var player = new Player('Alysia');

  it('has a name', function() {
    expect(player.player_name()).toEqual('Alysia');
  });

  it('tracks played words', function() {
    expect(player.plays()).toEqual([]);
  });

  it('tracks if player has won', function() {
    expect(player.hasWon()).toEqual(false);
  });

  it('scores a word', function() {
    expect(player.play("hello")).toEqual(8);
  });

  it('returns a players highest scoring word', function() {
    expect(player.highestScoringWord()).toEqual("hello is your highest scoring word!");
  });

  it('returns a players highest word score', function() {
    expect(player.highestWordScore()).toEqual("8 is your highest word score!");
  });

  it('returns a players total score', function() {
    expect(player.totalScore()).toEqual(32);
  });

// Cant figure out how to write negating tests!!

  xit('returns a players highest word score', function() {
    expect(player.highestWordScore()).toEqual("8 is your highest word score!");
  });

  xit('returns a players highest word score', function() {
    expect(player.highestWordScore()).toEqual("8 is your highest word score!");
  });

  xit('returns a players highest word score', function() {
    expect(player.highestWordScore()).toEqual("8 is your highest word score!");
  });

});
