var Player = require("../player.js");

describe ('A new player instantiated', function() {
  var adriana = new Player("Adriana")

  it ("Knows the name of the player", function() {
    expect(adriana.name).toEqual("Adriana");
  });

  it ("Has an empty array for played words", function() {
    expect(adriana.played_words).toEqual([])
  });
});


describe ('plays(word)', function() {
  var adriana = new Player("Adriana")

  it ("Adds a single word to the played_words array", function() {
    expect(adriana.plays("hello")).toEqual(["hello"]);
  });

  it ("Adds new word to the end of the array", function() {
    expect(adriana.plays("im")).toEqual(["hello", "im"]);
  });

  it ("Adds an array of words to the end of the array", function() {
    expect(adriana.plays(["killing", "this", "testing"])).toEqual(["hello", "im", "killing", "this", "testing"]);
  });
});
