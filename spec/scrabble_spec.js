var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });

  it('a = 1', function() {
    expect(scrabble.point['a']).toEqual(1);
  });

  it('z = 10', function() {
    expect(scrabble.point['z']).toEqual(10);
  });

  it('cat equals 5 points', function() {
    expect(scrabble.score('cat')).toEqual(5);
  });

  it('zebra equals 16 points', function() {
    expect(scrabble.score('zebra')).toEqual(16);
  });
});
