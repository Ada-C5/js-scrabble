var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('score', function() {
  var scrabble = new Scrabble();

  it('returns correct score for a short word', function() {
    expect(scrabble.score('test')).toEqual(4);
  });

  it('returns correct score for a bonus word', function() {
    expect(scrabble.score('question')).toEqual(67);
  });
});

describe('highestScoreFrom', function() {
  var scrabble = new Scrabble();

  it('returns correct word from array of short words', function() {
    expect(scrabble.highestScoreFrom(['test', 'cat', 'shook', 'cold'])).toEqual('shook');
  });

  it('returns correct score for an array including bonus word', function() {
    expect(scrabble.highestScoreFrom(['question', 'joint', 'quizzical'])).toEqual('quizzical');
  });

  it('returns shortest word of given score', function() {
    expect(scrabble.highestScoreFrom(['taste', 'cat' ])).toEqual('cat');
  });

  it('returns first word for two equal length && equal score', function() {
    expect(scrabble.highestScoreFrom(['cat', 'dog'])).toEqual('cat');
  });
});