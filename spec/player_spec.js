var Scrabble = require("../scrabble.js");
var Player = require("../player.js");


describe('Player JS file', function() {
  var player = new Player('Zeek');

  it('says hello world', function() {
    expect(player.helloWorld()).toEqual('hello world!');
  });

  it('knows the players name', function() {
    expect(player.name).toEqual('Zeek');
  });

  it('knows the players array of played words', function() {
    expect(player.plays).toEqual([]);
  });

  it('can get a score from playing a word', function() {
    expect(player.play('Meow')).toEqual(9);
  });

  it('tells player if word is not acceptable, does not add to array', function() {
    expect(player.play('NOTaWord')).toEqual('Unacceptable word!!');
  });

  it('can add to array of played words', function() {
    expect(player.plays).toEqual(['Meow']);
  });

  it('can find total score from an array of words', function() {
    expect(player.total_score(['Z', 'ZZ', 'ZZZ', 'ZZZZ', 'AAAAA'])).toEqual(105);
  });

  it('knows if player hasnt won', function() {
    expect(player.hasWon()).toEqual(false);
  });

  it('knows if player has won', function() {
    player.play('ZZZZZZZ');
    player.play('ZZZZZZZ');
    expect(player.total_score(player.plays)).toEqual(129);
    expect(player.hasWon()).toEqual(true);
  });

  it('returns false if player has won and tries to play a word', function() {
    expect(player.play('Meow')).toEqual(false);
  });

  it('can find highest scoring word', function() {
    expect(player.highestScoringWord()).toEqual('ZZZZZZZ');
  });

  it('can find highest scoring word SCORE', function() {
    expect(player.highestWordScore()).toEqual(120);
  });

});
