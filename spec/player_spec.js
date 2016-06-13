var Player = require("../player.js");

describe('Player', function() {
  var myplayer = new Player("ania");

  it('is present', function(){
    expect(myplayer !== undefined).toEqual(true);
  });
  it('knows the player name', function() {
    expect(myplayer.name).toEqual("ania");
  });

  it('can play a word', function() {
    myplayer.play("ada");
    expect(myplayer.plays).toContain("ada");
  });

  it('knows the total score of words played so far', function() {
    expect(myplayer.total_score()).toEqual(4);
  });

  it('can play another word', function() {
    myplayer.play("code");
    expect(myplayer.plays).toContain("code");
  });

  it('knows the total score of words played so far', function() {
    expect(myplayer.total_score()).toEqual(11);
  });

  it('can play another word that gets score above 100', function() {
    myplayer.play("QQQQQQQQQ");
    expect(myplayer.total_score()).toEqual(101);
  });

  it('hasWon returns true if score is above 100', function() {
    expect(myplayer.hasWon()).toEqual(true);
  });

  it('does not allow to play another word if hasWon is true', function() {
    myplayer.play("QQQQQQQQQ");
    myplayer.play("ZZZZZZ");
    myplayer.play("another");
    expect(myplayer.plays).toNotContain("another");
  });

  it('returns the highest scoring word played', function() {
    expect(myplayer.highestScoringWord()).toEqual("QQQQQQQQQ");
  });

  it('returns the highest scoring word score', function() {
    expect(myplayer.highestWordScore()).toEqual(90);
  });

})
