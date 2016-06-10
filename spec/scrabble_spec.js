var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('score word', function() {
  var scrabble = new Scrabble();

  it('scores one word', function() {
    expect(scrabble.score('butts')).toEqual(7);
  });

  it('properly applies bonus to score', function() {
    expect(scrabble.score('twilight')).toEqual(65);
  });

  it('properly applies bonus to score(refute edition)', function() {
    expect(scrabble.score('twilight')).toNotEqual(15);
  });

    it('does not score garbage input', function() {
    expect(function () {scrabble.score('&**!#*%');}).toThrow(new Error('this is not valid input!'));
  });
});