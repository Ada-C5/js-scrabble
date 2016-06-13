var Scrabble = require("../scrabble.js");
var Player = require("../player.js");


describe('Player JS', function() {
  var player = new Player('Zeek');

  it('says hello world', function() {
    expect(player.helloWorld()).toEqual('hello world!');
  });

  it('knows the players name', function() {
    expect(player._name).toEqual('Zeek');
  });
});
