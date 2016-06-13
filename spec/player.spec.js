var Player = require("../player.js");

var azula = new Player("Azula");

describe('Player', function() {
  it('has a name', function() {
    expect(azula.name).toEqual(jasmine.any(String));
  });

  it('has the correct name', function() {
    expect(azula.name).toEqual("Azula");
  });

  it('has an empty array of played words to start', function() {
    expect(azula.plays).toEqual([]);
  });
});

describe('play(word)', function() {
  it('adds a word to plays property', function() {
    azula.play("kittens");
    expect(azula.plays.length).toEqual(1);
  });
});

describe('totalScore', function() {

  it('returns a number', function() {
    azula.play('kittens')
    azula.play('puppies')
    expect(azula.totalScore()).toEqual(jasmine.any(Number));
  });

});
