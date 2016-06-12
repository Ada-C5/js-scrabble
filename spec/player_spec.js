var Player = require("../player.js");

describe('Player', function() {
  var jillian = new Player();

  // Test if everything is set up
  it('exists', function() {
    expect(jillian !== undefined).toEqual(true);
  });
})

describe('Player.name', function() {
  var jillian = new Player("Jillian");

  it('knows its name', function() {
    expect(jillian.name).toEqual('Jillian');
  });
});

describe('Player.plays', function() {
  var jillian = new Player("Jillian");

  it('upon instantiation it is an empty array', function() {
    expect(jillian.plays).toEqual([]);
  });
});

describe('Player.plays', function() {
  var jillian = new Player("Jillian");
  jillian.play("word")

  it('knows its words', function() {
    expect(jillian.plays).toEqual(["word"]);
  });
});

describe('Player.plays', function() {
  var jillian = new Player("Jillian");
  jillian.play("word")
  jillian.play("poop")

  it('it can have more than one word', function() {
    expect(jillian.plays).toEqual(["word", "poop"]);
  });
});

describe('play', function() {
  var jillian = new Player("Jillian");
  jillian.play("zzzzzzz")

  it('adds words to its array', function() {
    expect(jillian.plays).toEqual(["zzzzzzz"])
  });

  it('if player has won, it returns false', function() {
    expect(jillian.play("zzzzzzz")).toEqual(false);
  });
});

describe('total_score', function() {
  var jillian = new Player("Jillian");
  jillian.play("zzzzzzz")

  it('returns a number', function() {
    expect(jillian.total_score()).toEqual(jasmine.any(Number))
  });

  it('returns a score', function() {
    expect(jillian.total_score()).toEqual(120);
  });
});

describe('total_score', function() {
  var jillian = new Player("Jillian");
  jillian.play("word")
  jillian.play("poop")

  it('sums all scores', function() {
    expect(jillian.total_score()).toEqual(16)
  });
});

describe('total_score', function() {
  var jillian = new Player("Jillian");

  it('returns zero if no words have been played', function() {
    expect(jillian.total_score()).toEqual(0)
  });
});

describe('hasWon', function() {
  var jillian = new Player("Jillian");
  jillian.play("word")

  it('returns false if player has not reached 100 points', function() {
    expect(jillian.hasWon()).toEqual(false)
  });
});

describe('hasWon', function() {
  var jillian = new Player("Jillian");
  jillian.play("zzzzzzz")

  it('returns true if player has exceeded 100 points', function() {
    expect(jillian.hasWon()).toEqual(true)
  });
});

describe('highestScoringWord', function() {
  var jillian = new Player("Jillian");
  jillian.play("word")
  jillian.play("zzzzzzz")

  it('returns word with the highest score', function() {
    expect(jillian.highestScoringWord()).toEqual("zzzzzzz")
  });
});

describe('highestWordScore', function() {
  var jillian = new Player("Jillian");
  jillian.play("word")
  jillian.play("zzzzzzz")

  it('returns the score of teh most valuable word', function() {
    expect(jillian.highestWordScore()).toEqual(120)
  });
});
