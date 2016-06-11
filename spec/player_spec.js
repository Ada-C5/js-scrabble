var Player = require("../player.js");

describe('Player', function() {
  // setup - new game of Scrabble
  var player = new Player();

  it("is present", function(){
  expect(player !== undefined).toEqual(true);
  });
});
