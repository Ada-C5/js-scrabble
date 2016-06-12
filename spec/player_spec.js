var Player = require("../player.js");

describe('Player name', function() {
  var player = new Player('Alysia');

  it('has a name', function() {
    expect(player.player_name()).toEqual('Alysia');
  });
});
