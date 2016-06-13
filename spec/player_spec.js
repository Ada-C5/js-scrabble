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

  it('returns updated score after play is made', function() {
    player.play('question');
    expect(player.total_score()).toEqual(134);
  })
});

describe('hasWon', function() {
  var player = new Player('Walt');
  player.play('question');

  it('returns false if players plays are less than 100pts', function() {
    expect(player.hasWon()).toEqual(false);
  });

  it('returns true if players plays are 100 or more', function() {
    player.play('quizzical');
    expect(player.hasWon()).toEqual(true);
  })
});

describe('highestScoringWord', function() {
  var player = new Player('Henry');
  player.plays = ['toast', 'question', 'cat'];

  it('returns the correct word when asked for highest scoring word', function() {
    expect(player.highestScoringWord()).toEqual('question');
  })

  it('will return the correct highest word after subsequent plays', function() {
    player.play('quizzical');
    expect(player.highestScoringWord()).toEqual('quizzical');
  })
});

describe('highestWordScore', function() {
  var player = new Player('Tom');
  player.plays = ['cat', 'dog', 'question']

  it('returns the score of the highest scoring word in plays', function() {
    expect(player.highestWordScore()).toEqual(67);
  });

  it('will return the correct highest score after a new word is played', function() {
    player.play('quizzical');
    expect(player.highestWordScore()).toEqual(88);
  })
})