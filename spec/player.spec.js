var Player = require("../player.js");

describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player("Lisa");
  })

  it('sets up an instance of a player with a given name', function() {
    expect(player.name).toEqual('Lisa');
  });

  it('has an array of all words played in the play property', function() {
    expect(player.plays).toBeDefined();
  });

  it('starts with an empty array for the play property', function() {
    var player = new Player('two');
    expect(player.plays).toEqual([]);
  });

  it('starts with an empty array for the scores property', function() {
    var player = new Player('three');
    expect(player.scores).toEqual([]);
  });

  it('adds an element to both the plays and the scores properties when a word is played', function() {
    player.play('dog');
    expect(player.plays.length).toEqual(1);
    expect(player.scores.length).toEqual(1);
  });

  describe('play(word)', function() {
    it('returns false if a player has already won', function() {
      player.play('zzzzzzzzzzz');
      expect(player.play('dog')).toEqual(false);
    });

    it('does not add the word to the play array if the player has already won', function() {
      player.play('zzzzzzzzzzz');
      player.play('word');
      expect(player.plays).toEqual(['zzzzzzzzzzz']);
    })

    it('adds the played word to the play array if the player has not yet won', function() {
      player.play('catnip');
      expect(player.plays).toEqual(['catnip']);
    });
  });

  describe('total_score()', function() {
    it('returns the numerical score of all the words played', function() {
      player.play('bat');
      player.play('jack');
      expect(player.total_score()).toEqual(22);
    });

    it('returns 0 if there are no words played', function() {
      expect(player.total_score()).toEqual(0);
    });
  });

  describe('hasWon()', function() {
    it('returns true if a player has scored over 100 points', function() {
      player.play('zzzzzzzzzzz');
      expect(player.hasWon()).toEqual(true);
    });

    it('returns false if a player has not scored over 100 points', function() {
      player.play('dog');
      expect(player.hasWon()).toEqual(false);
    });

    it('returns true if the player has exactly 100 points', function() {
      player.play('zzzzzzzzzz');
      expect(player.hasWon()).toEqual(true);
    });
  });

  describe('highestScoringWord()', function() {
    it('returns the highest scoring word a player has played', function() {
      player.play('dog');
      player.play('jack');
      expect(player.highestScoringWord()).toEqual('jack');
    });

    it('returns the first word with the highest score if there are ties', function() {
      player.play('dog');
      player.play('cat');
      expect(player.highestScoringWord()).toEqual('dog');
    });
  });

  describe('highestWordScore()', function() {
    it('returns the highest score from the words played', function() {
      player.play('dog');
      player.play('jack');
      expect(player.highestWordScore()).toEqual(17);
    });
  });
});
