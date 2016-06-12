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

    it('properly applies bonus to score of a 7-letter word', function() {
      expect(scrabble.score('buzzcut')).toEqual(79);
    });

    it('properly applies bonus to 7-letter word(refute edition)', function() {
      expect(scrabble.score('buzzcut')).toNotEqual(29);
    });

    it('does not score garbage input', function() {
      expect(function(){scrabble.score('&**!#*%');}).toThrow(new Error('this is not valid input!'));
    });

    it('does not score partially garbage input', function() {
      expect(function(){scrabble.score('&*avocado!');}).toThrow(new Error('this is not valid input!'));
    }); 

  describe('Score an Array of Words', function() {
    var scrabble = new Scrabble();

    it('scores a word from an array', function() {
      var test = ['apple']; 
      expect(scrabble.highestScoreFrom(test)).toEqual('apple');
    });

    it('scores many words in an array', function() {
      var cats = ['watermel', 'pineappl', 'cantalop']; 
      expect(scrabble.highestScoreFrom(cats)).toEqual('pineappl');
    });
  });
});