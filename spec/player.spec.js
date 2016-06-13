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
