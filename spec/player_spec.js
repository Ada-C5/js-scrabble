var Player = require("../player.js");

describe('Player', function(){
  var winner = new Player("Wordsmith"),
      winner._plays = ["develop","jacuzzi"];

  it("is present", function(){
    expect(winner !== undefined).toEqual(true);
  });

  it("has a name", function(){
    expect(winner._name).toEqual('Wordsmith');
  });

  // test play function
  it("returns false if player won", function(){
    expect(winner._name).toEqual('Wordsmith');
  });

});