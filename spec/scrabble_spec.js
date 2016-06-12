var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });

  it('knows it has points, Z=10', function() {
    expect(scrabble._tilepoints['Z']).toEqual(10);
  });

  it('returns 5 for AEIOU', function() {
    expect(scrabble.score('AEIOU')).toEqual(5);
  });
});
