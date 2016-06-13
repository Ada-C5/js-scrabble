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

  it('is case insensitive', function() {
    expect(scrabble.score('aeiou')).toEqual(5);
  });

  it('adds 50 for using 7 letters', function() {
    expect(scrabble.score('AEIOUAA')).toEqual(57);
  });

  it('knows ZZZZZZZ is the highest word', function() {
    expect(scrabble.highestScoreFrom(['AEIOU','ZZZZZZZ'])).toEqual('ZZZZZZZ');
  });

  it('picks the first word in a same length/score tie', function() {
    expect(scrabble.highestScoreFrom(['AAA','EEE'])).toEqual('AAA');
  });

  it('picks the shortest word in a score tie (5)', function() {
    expect(scrabble.highestScoreFrom(['K','AEIOU'])).toEqual('K');
  });

  it('picks the highest scoring word in a length tie (7)', function() {
    expect(scrabble.highestScoreFrom(['ZZZZZZZ','AAAAAAA'])).toEqual('ZZZZZZZ');
  });

  it('errors if word is not within 1-7 letters', function() {
    expect(scrabble.score('ABCDEFGHIJKL')).toEqual('Unacceptable word!!');
  });

});
