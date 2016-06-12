var Player = require("../player.js");

describe ('A new player instantiated', function() {
  var adriana = new Player("Adriana");

  it ("Knows the name of the player", function() {
    expect(adriana.name).toEqual("Adriana");
  });

  it ("Has an empty array for played words", function() {
    expect(adriana.played_words).toEqual([])
  });
});


describe ('plays() and play(word)', function() {
  var adriana = new Player("Adriana");

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

describe ('total_score()', function() {
  var adriana = new Player("Adriana");
  adriana.play("cat");
  adriana.play("bat");
  adriana.play("hat");

  it ("Sums up all the played words", function () {
    expect(adriana.total_score()).toEqual(16);
  });

  it ("Sums up all the played words again without adding more to it", function () {
    expect(adriana.total_score()).toEqual(16);
  });

  it ("Sums up all the played words and replaces when a word is added", function () {
    adriana.play("rat");
    expect(adriana.total_score()).toEqual(19);
  });
});

describe ('hasWon()', function() {
  var adriana = new Player("Adriana");
  var chris = new Player("Chris");

  it ("returns true if player score >= 100", function () {
    adriana.play("cacique");
    adriana.play("mezquit");
    expect(adriana.hasWon()).toEqual(true);
  });

  it ("returns false if player score < 100", function () {
    chris.play("cacique");
    chris.play("hat");
    expect(chris.hasWon()).toEqual(false);
  });

  it ("cannont play more words if hasWon is true", function () {
    expect(adriana.play("cat")).toEqual(false);
  });
});














//
