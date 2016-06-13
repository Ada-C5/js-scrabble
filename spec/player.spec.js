var Player = require("../player.js");


describe('Player', function() {
  var azula = new Player("Princess Azula");

  it('has a name', function() {
    expect(azula.name).toEqual(jasmine.any(String));
  });

  it('has the correct name', function() {
    expect(azula.name).toEqual("Princess Azula");
  });

  it('has an empty array of played words to start', function() {
    expect(azula.plays).toEqual([]);
  });
});

describe('play(word)', function() {
  var toph = new Player("Toph")
  toph.play("kittens");

  it('adds a word to plays property', function() {
    expect(toph.plays.length).toEqual(1);
  });

  it('adds the correct word to plays property', function(){
    expect(toph.plays[0]).toEqual("kittens");
  });
});

describe('totalScore', function() {
  var momo = new Player("Momo");
  var iroh = new Player("Uncle Iroh");
  iroh.play('kitten');
  iroh.play('puppies');

  it('returns 0 if no words have been played', function() {
    expect(momo.totalScore()).toEqual(0)
  });

  it('returns a number', function() {
    expect(iroh.totalScore()).toEqual(jasmine.any(Number));
  });

  it('returns the correct total score', function() {
    expect(iroh.totalScore()).toEqual(73);
  });
});

describe('hasWon', function() {
  var zuko = new Player("Prince Zuko")

  it('returns false if score is < 100', function() {
    zuko.play("kittens");
    expect(zuko.hasWon()).toEqual(false);
  });

  it('returns true if score is >= 100', function() {
    zuko.play("puppies");
    expect(zuko.hasWon()).toEqual(true);
  });
});

describe('highestScoringWord', function() {
  var aang = new Player("Avatar Aang");
  aang.play("dragon") // 8
  aang.play("tea") // 3
  aang.play("fire") // 7

  it('returns a string', function() {
    expect(aang.highestScoringWord()).toEqual(jasmine.any(String));
  });

  it('returns a the highest scoring word', function() {
    expect(aang.highestScoringWord()).toEqual("dragon");
  });
});

describe('highestWordScore', function() {
  var appa = new Player("Appa the Flying Bison");
  appa.play("dragon") // 8
  appa.play("tea") // 3
  appa.play("fire") // 7

  it('returns a number', function() {
    expect(appa.highestWordScore()).toEqual(jasmine.any(Number));
  });

  it('returns a the highest score', function() {
    expect(appa.highestWordScore()).toEqual(8);
  });

  it('returns a the highest score when it is not the first item in plays array', function() {
    appa.play("dragons")
    expect(appa.highestWordScore()).toEqual(59);
  });
});
