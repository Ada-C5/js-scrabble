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
});
