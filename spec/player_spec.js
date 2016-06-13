var Scrabble = require("../scrabble.js");
var Player = require('../player.js')

describe('Player', function() {
  var player = new Player('Liz');
  player.plays = ['joke', 'cat', 'tries'];

  it('knows its name', function() {
    expect(player.name).toEqual('Liz');
  });

  it ('knows its plays', function() {
    expect(player.plays).toEqual(['joke', 'cat', 'tries']);
  })
});

describe('play', function() {
var player = new Player('Rob');
player.play('toast');

  it('stores a word in plays at the index position of the turn', function() {
    expect(player.plays[0]).toEqual('toast');
  });

  it ('will not add a word to plays if player has won already', function() {
    player.play('qqqqqqq');
    expect(player.play('quiet')).toEqual(false);
  })
});

describe('total_score', function() {
  var player = new Player('Walt');
  player.play('question');

  it('returns correct score', function() {
    expect(player.total_score()).toEqual(67);
  });
});