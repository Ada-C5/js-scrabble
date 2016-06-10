var Player = require("../player.js");

describe('Player', function() {
	var player = new Player();

	it('says hello world for player', function() {
    expect(player.helloWorld()).toEqual('hello world!');
  });

});