var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  describe('score(word)', function() {
    it('returns the score 5 for the word dog', function() {
      expect(scrabble.score('dog')).toEqual(5);
    });

    it('is case insensitive', function() {
      expect(scrabble.score('doG')).toEqual(5);
    });

    it('adds a 50 point bonus if a word uses 7 letters', function() {
      expect(scrabble.score('aaaaaaa')).toEqual(57);
    });

    it('returns a helpful message if a word containing space is entered', function() {
      expect(scrabble.score('elephant hotdog')).toEqual("Words can only contain letters (no symbols or spaces)");
    });

    it('returns a helpful message if a word contains symbols', function() {
      expect(scrabble.score('!-cat,.')).toEqual("Words can only contain letters (no symbols or spaces)");
    });
  });

  describe('highestScoreFrom', function() {
    it('returns the word fog from the array [dog, fog, log]', function() {
      expect(scrabble.highestScoreFrom(['dog', 'fog', 'log'])).toEqual('fog');
    });

    it('returns the shortest word if there is a tie', function() {
      expect(scrabble.highestScoreFrom(['dogs', 'cog', 'log'])).toEqual('cog');
    });

    it('returns the word using 7 letters over a shorter word if tied (shorter first)', function() {
      expect(scrabble.highestScoreFrom(['zzzzzz', 'aaaaddd'])).toEqual('aaaaddd');
    });

    it('returns the word using 7 letters over a shorter word if tied (shorter at end)', function() {
      expect(scrabble.highestScoreFrom(['aaaaddd', 'zzzzzz'])).toEqual('aaaaddd');
    });

    it('returns the first word in the list if scores and length are the same', function() {
      expect(scrabble.highestScoreFrom(['cat', 'bat'])).toEqual('cat');
    });
  })
})