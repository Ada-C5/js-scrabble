var Scrabble = require("../scrabble.js");
var Player = require("../player.js");

describe('Scrabble Player', function() {
  var player = new Player('jade');

  it('Knows the name of the player', function() {
    expect(player.name).toEqual('jade');
  });

  it('Allows a player to play a word', function() {
    expect(player.play('word')).toEqual(['word']);
  });
}); 
