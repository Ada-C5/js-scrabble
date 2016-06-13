var Scrabble = require("../scrabble.js");

describe('scrabble', function() {
  // game is an instance of Scrabble
  var game = new Scrabble();

  it('is present', function() {
    expect(game !== undefined).toEqual(true);
  });
});

describe('score', function() {
  var game = new Scrabble();

  it('returns a score for a word', function() {
    expect(game.score('cat')).toEqual(5);
  });

  // it("throws an error for entries not containing only letters", function() {
    //   expect(game.score("%$aa")).toThrow(new Error("That is not valid input!"));
    // });
  it("throws an error for entries not containing only letters", function() {
    expect(function() {game.score("%$aa");} ).toThrow(new Error("That is not valid input!"));
  });
});

describe('highest_score_from', function() {
  var game = new Scrabble();

  it('returns a single string with the word', function() {
    expect(game.highest_score_from(['cat'])).toEqual('cat');
  });

  it('returns the highest scoring word', function() {
    expect(game.highest_score_from(['cat','aaa'])).toEqual('cat');
  });

  it('returns the shorter word of two words that have the same score', function(){
    expect(game.highest_score_from(['cat','aaaaa'])).toEqual('cat');
  });
});

describe('letter_value', function() {
  var game = new Scrabble();

  it('returns a number value for multiple letters', function() {
    expect(game.letter_value('c', 'r', 'a', 'a')).toEqual(3, 1, 1, 1);
  });

  it('takes in a string', function(){
  expect(game.letter_value('c')).toEqual(3);
  });
});


describe('player', function() {
  // game is an instance of Scrabble
  var newPlayer = new Scrabble();

  it('is present', function() {
    expect(newPlayer !== undefined).toEqual(true);
  });
});

describe('name', function() {
  it('returns the value of players name', function() {
    expect(player.name("risha")).toEqual()
  });
});
