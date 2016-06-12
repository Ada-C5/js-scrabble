var Scrabble = require("../scrabble.js");

// Left helloworld code and test in for reference purposes. This is intentional.
describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });
});

describe('score', function(_x) {
  var scrabble = new Scrabble();

  it('returns a number', function() {
    expect(scrabble.score("word")).toEqual(jasmine.any(Number));
  });

  it('it scores lowercase', function() {
    expect(scrabble.score("word")).toEqual(jasmine.any(Number));
  });

  it('it scores uppercase', function() {
    expect(scrabble.score("WORD")).toEqual(jasmine.any(Number));
  });

  it('it scores mixed case', function() {
    expect(scrabble.score("wOrD")).toEqual(jasmine.any(Number));
  });

  // Could not get this test to work, I'm leaving it in the code, because I'm hoping someone will give me review and help me figure out where the syntax error is.

  // it('throws an error if given a non-alpha character', function() {
  //   expect(scrabble.score("word1")).toThrow(new Error("Invalid character."));
  // });

  it('the word _word_ scores as 8', function() {
    expect(scrabble.score("word")).toEqual(8);
  });

  // Score of 'zzzzzzz' should equal: 70 (points from letters alone) + 50 (bonus points) = 120
  it('seven letter words get 50 point bonus', function() {
    expect(scrabble.score("zzzzzzz")).toEqual(120);
  });
});

describe('shortest', function() {
  var scrabble = new Scrabble();

  it('returns the shortest word', function() {
    expect(scrabble.shortest("puppy", "dog")).toEqual("dog");
  });

  it('returns the shortest word, regardless of which is passed first', function() {
    expect(scrabble.shortest("dog", "puppy")).toEqual("dog");
  });

  it('returns the the second word, if words are the same length', function() {
    expect(scrabble.shortest("meow", "bark")).toEqual("bark");
  });
});

describe('highestScoreFrom', function() {
  var scrabble = new Scrabble();
  var an_array = ["word", "poop", "water", "exit"]

  it('returns the highest scoring word', function() {
    expect(scrabble.highestScoreFrom(an_array)).toEqual('exit');
  });
});

describe('highestScoreFrom', function() {
  var scrabble = new Scrabble();
  var an_array = ["word", "poop"]

  it('if words are the same score, it returns the first one given', function() {
    expect(scrabble.highestScoreFrom(an_array)).toEqual('word');
  });
});

describe('highestScoreFrom', function() {
  var scrabble = new Scrabble();
  var an_array = ["word", "hop"]

  it('if words are the same score, it returns the shortest one given', function() {
    expect(scrabble.highestScoreFrom(an_array)).toEqual('hop');
  });
});

describe('highestScoreFrom', function() {
  var scrabble = new Scrabble();

  // The edgiest of edge cases, IMHO. But "aaaaaaf" is a seven letter word that when scored should equal 60, and "qqqqqq" is a six letter word that should also equal 60.
  var an_array = ["aaaaaaf", "qqqqqq"]

  it('if words are the same score, and one used all seven letters, it returns the one with seven letters rather than the one with fewer', function() {
    expect(scrabble.highestScoreFrom(an_array)).toEqual('aaaaaaf');
  });
});
