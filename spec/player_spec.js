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

  it('can add mult words to plays array', function() {
  	player.play('cat');
    player.play('cat');
    player.play('cat');
    expect(player.plays).toEqual([ 'cat', 'cat', 'cat', 'cat' ]);
  });

  it('can get total score from plays property', function() {	
  	var player = new Player("Bob");
    player.play('cat');
    player.play('cat');
    player.play('cat');
    // console.log(player.plays);
    // console.log(player.total_score);
    expect(player.total_score()).toEqual(15);
  });

  it('can check if player has won', function() {
  	player.play('cat');
    expect(player.hasWon()).toEqual(false);
  });

  it('can get highest scoring word', function() {
  	player.play('cat');
    player.play('zebra');
    player.play('cat');
    expect(player.highestScoringWord()).toEqual('zebra');
  });

  it('can get highest scoring word score', function() {
  	player.play('cat');
    player.play('zebra');
    player.play('cat');
    expect(player.highestWordScore()).toEqual(16);
  });

});