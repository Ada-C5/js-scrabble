var Scrabble = require("../scrabble.js");

describe('Scrabble#score', function() {
  var scrabble = new Scrabble();
  var points = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  };

  it('return score of each letter', function() {
    for(letter in points){
      expect(scrabble.score(letter)).toEqual(points[letter]);
    }
  });

  it('return score of 5 for the word cat', function() {
      expect(scrabble.score('cat')).toEqual(5);

  });

  it('return score of 57 for the word aaaaaaa', function() {
      expect(scrabble.score('aaaaaaa')).toEqual(57);

  });

  it('return score of 0 if no word is given', function() {
      expect(scrabble.score('')).toEqual(0);

  });

  it('return score of 0 if no word is given', function() {
      expect(scrabble.score('c a t')).toEqual(5);

  });

});
