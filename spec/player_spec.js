var Player = require("../player.js");


// describe(#instance_method)
// describe(.class_method)


describe('Player', function() {
  var player = new Player("Mindy");

  it('is present', function() {
    expect(player !== undefined).toEqual(true);
  });

  it('knows the players name', function() {
    expect(player.name).toEqual("Mindy")
  });

});


describe('#play', function() {
  var player = new Player("Bella")

  it('adds the played word to this.plays', function() {
    player.play("cat")
    expect(player.plays).toEqual(["cat"]);
  });


  it('knows the total score of the words played so far', function() {
    expect(player.total_score()).toEqual(5)
  });

  it('can play another word', function() {
    player.play("coffee");
    expect(player.plays).toContain("coffee");
  });

  it('knows the total score of the words played so far', function() {
    expect(player.total_score()).toEqual(19)
  });

  it('can get a score above 100', function() {
    player.play("ZZZZZZZZZZ");
    expect(player.total_score()).toEqual(119);
  });

  it('hasWon returns true if score is above 100', function() {
    expect(player.hasWon()).toEqual(true);
  });

  it('returns the highest scoring word played', function() {
    expect(player.highestScoringWord()).toEqual("ZZZZZZZZZZ");
  });

  it('returns the highest scoring word score', function() {
    expect(player.highestWordScore()).toEqual(100);
  });

  it('doesnt allow a player to play a word if theyve won', function() {
    player.play("ZZZZZZZZZZ");
    player.play("anything");
    expect(player.plays).toNotContain("anything");
  });
});
