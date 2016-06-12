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


describe ('plays() and play(word)', function() {
  var adriana = new Player("Adriana")

  it ("returns the played_words", function() {
    expect(adriana.plays()).toEqual([]);
  });

  it ("Adds a single word to the played_words array", function() {
    expect(adriana.play("hello")).toEqual(["hello"]);
  });

  it ("returns the played_words", function() {
    expect(adriana.plays()).toEqual(["hello"]);
  });

  it ("Adds new word to the end of the array", function() {
    expect(adriana.play("im")).toEqual(["hello", "im"]);
  });

  it ("Adds an array of words to the end of the array", function() {
    expect(adriana.play(["killing", "this", "testing"])).toEqual(["hello", "im", "killing", "this", "testing"]);
  });

  it ("returns the played_words", function() {
    expect(adriana.plays()).toEqual(["hello", "im", "killing", "this", "testing"]);
  });
});















// 
