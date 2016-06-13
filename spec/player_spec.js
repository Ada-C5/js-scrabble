var Player = require("../player.js");
describe('Hello World', function() {
  var scrabble = new Player();

  it('says hello world', function() {
    expect(player.helloWorld()).toEqual('hello world!');
  });

  it("returns a scored word", function(){
    expect(player.score('word')).toEqual(8);
  });
