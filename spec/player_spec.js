var Player = require("../player.js");

describe("player object", function() {
  var player = new Player("Jess");

  it("has name attribute that can be called once instatiated", function() {
    expect(player.name).toEqual("Jess");
  });

  it("allows player to play a word and return word and score", function() {
    expect(player.play("monkey")).toEqual("monkey: 15");
  });

});