var Player = require("../player.js");

describe('Player', function(){
  var player = new Player("Wordsmith");

  it("is present", function(){
    expect(player !== undefined).toEqual(true);
  });

  it("has a name", function(){
    expect(player._name).toEqual('Wordsmith');
  });
});