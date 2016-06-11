var Player = require("../player.js");

describe('Player', function() {
  var player = new Player("melissa");

  it("#player's name should not be undefined or null", function() {
    expect(player.name()).not.toBeUndefined();
    expect(player.name()).not.toBeNull();
    expect(player.name()).toEqual(jasmine.any(String));
  });

  it("Player#plays returns an Array of the words", function() {
    expect(player.plays()).not.toBeUndefined();
    expect(player.plays()).not.toBeNull();
    expect(Array.isArray(player.plays())).toEqual(true);
  });

  xit("Player#play(word) Function which will adds the input word to the plays Array", function() {
    expect(player.play("melissa")).not.toBeUndefined();
    expect(player.play("david")).not.toBeNull();
    expect(typeof player.play("lunes")).toEqual("boolean");
  });

  xit("Player#total_score(): Function which sums up and returns the score of the players words", function() {
    expect(player.total_score()).not.toBeUndefined();
    expect(player.total_score()).not.toBeNull();
    expect(player.total_score()).toEqual(jasmine.any(Number));
  });

  xit("Player#hasWon(): Function with logic to determine if the player has over 100 points, returns 'true', otherwise returns 'false'", function() {
    expect(player.hasWon()).not.toBeUndefined();
    expect(player.hasWon()).not.toBeNull();
    expect(typeof player.hasWon()).toEqual('boolean');
  });

  xit("Player#highestScoringWord(): Function which returns the highest scoring word the user has played.", function() {
    expect(player.highestScoringWord()).not.toBeUndefined();
    expect(player.highestScoringWord()).not.toBeNull();
    expect(player.highestScoringWord()).toEqual(jasmine.any(String));
  });

  xit("Player#highestScoringWord(): Function which returns the highestScoringWord score.", function() {
    expect(player.highestScoringWord()).not.toBeUndefined();
    expect(player.highestScoringWord()).not.toBeNull();
    expect(player.highestScoringWord()).toEqual(jasmine.any(Number));
  });

});
