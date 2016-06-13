var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });

  it("returns a scored word", function(){
    expect(scrabble.score('word')).toEqual(8);
  });

  it("returns a scored word", function(){
    expect(scrabble.score('aaa')).toEqual(3);
  });

  it("returns a scored word", function(){
    expect(scrabble.score('zzz')).toEqual(30);
  });

  it("returns a scored word with bonus of 50 points", function(){
    expect(scrabble.score('aaaaaaa')).toEqual(57);
  });

  it("returns a scored word with bonus of 50 points", function(){
    expect(scrabble.score('jkscdft')).toEqual(74);
  });

  it("returns a scored word with bonus of 50 points", function(){
    expect(scrabble.score('jkscest')).toEqual(70);
  });

  it("test single word", function(){
    expect(scrabble.score('q')).toEqual(10);
  });

});
