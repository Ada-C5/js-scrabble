var Player = require("../player.js");

describe('Player', function() {
  var player = new Player('Lisa');

  afterEach(function() {
    player.plays = [];
    player.scores = [];
  });

  it('sets up an instance of a player with a given name', function() {
    expect(player.name).toEqual('Lisa');
  });

  it('has an array of all words played in the play property', function() {
    expect(player.plays).toBeDefined();
  });

  it('starts with an empty array in the play property', function() {
    expect(player.plays).toEqual([]);
  });

  describe('play(word)', function() {
    it('returns false if a player has already won', function() {
      player.play('zzzzzzzzzzz');
      expect(player.play('dog')).toEqual(false);
    });

    it('adds the played word to the play array', function() {
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
  });

  describe('highestScoringWord()', function() {
    it('returns the highest scoring word a player has played', function() {
      player.play('dog');
      player.play('jack');
      expect(player.highestScoringWord()).toEqual('jack');
    });
  });

  describe('highestWordScore()', function() {
    it('returns the highest score from the words played', function() {
      player.play('dog');
      player.play('jack');
      expect(player.highestScoringWord()).toEqual(17);
    });
  });
});
