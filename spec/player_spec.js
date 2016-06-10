var Player = require("../player.js");

describe('Player', function() {
	var player = new Player("Bob");

	it('says hello world for player', function() {
    expect(player.helloWorld()).toEqual('hello world!');
  });

 	it('can set a player name', function() {
    expect(player.name).toEqual('Bob');
  });

  it('can have an array of played words', function() {
    expect(player.plays).toEqual([  ]);
  });

  it('can add word to plays array', function() {
    expect(player.play('cat')).toEqual(['cat']);
  });

});