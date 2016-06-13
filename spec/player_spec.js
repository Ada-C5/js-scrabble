var Player = require("../player.js");
describe('Hello World', function() {
  var scrabble = new Player();

  it('says hello world', function() {
    expect(player.helloWorld()).toEqual('hello world!');
  });

  it("returns false if they have not won", function(){
    expect(this.already_won).toEqual(false);
  });

  it("returns a scored word", function(){
    expect(this.plays.push('word')).toEqual(8);
  });


  it("returns the highest scoring word", function(){
    expect(thighest_scoring_word).toEqual(word);
  });

  it("return highest word score", function(){
    expect(thighest_scoring_word).toEqual(8);
  });

  
