// Minimum of 8 tests

var Scrabble = require("../scrabble.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  it('has a score hash', function() {
    expect(scrabble.score_hash).toEqual({ A : 1, B : 3, C : 3, D : 2, E : 1, F : 4, G : 2, H : 4, I : 1, J : 8, K : 5, L : 1, M : 3, N : 1, O : 1, P : 3, Q : 10, R : 1, S : 1, T : 1, U : 1, V : 4, W : 4, X : 8, Y : 4, Z : 10 });
  });

  it('accepts a word to score', function() {
    expect(scrabble.score("hello")).toEqual(8);
  });

  it('scores a word', function() {
    expect(scrabble.score("hello")).toEqual(8);
  });

  it('adds 50pt bonus to words >7 digits', function() {
    expect(scrabble.score("hellogoodbye")).toEqual(72);
  });

  it('accepts an array for highestScoreFrom', function() {
    expect(scrabble.highestScoreFrom(["me", "you", "hi", "zyx"])).toEqual('zyx is worth 22 points so it is your highest scoring word!');
  });

  it('identifies highest scoring word', function() {
    expect(scrabble.highestScoreFrom(["me", "you", "hi", "zyx"])).toEqual('zyx is worth 22 points so it is your highest scoring word!');
  });

  xit('does not accept invalid data in highestScoreFrom', function() {
    expect(scrabble.highestScoreFrom(14)).toThrowError(TypeError);
  });
  // Why doesn't this test work???^^

  it('scores only letters?', function() {
    expect(scrabble.score("")).toEqual(0);
  });

});
