var Scrabble = require("../scrabble.js");

describe('Score', function() {
  var scrabble = new Scrabble();

  it('will score a word', function() {
    expect(scrabble.score("anna")).toEqual(4);
  });

  it('is not case sensitive', function() {
    expect(scrabble.score("AnNa")).toEqual(4);
  });

  it('adds 50 points bonus to 7 letter words', function() {
    expect(scrabble.score("cupcake")).toEqual(67);
  });
});

describe('High score from an Array', function() {
  var scrabble = new Scrabble();

  it('picks the correct winner', function() {
    expect(scrabble.highscore(["cupcake","anna","bee"])).toEqual("cupcake");
  });

  it('picks first winner when all words are same points and 7 long', function() {
    expect(scrabble.highscore(["amplify","adjunct","cupcake"])).toEqual("amplify");
  });

  it('picks the 7 letters long winner when all other words are same points', function() {
    expect(scrabble.highscore(["cupcake","able","adios"])).toEqual("cupcake");
  });

  it('picks shortest-lengthed winner when all words are same points', function() {
    expect(scrabble.highscore(["able","adios","aerial"])).toEqual("able");
  });

  it('picks first winner when all words are same points and length', function() {
    expect(scrabble.highscore(["alas","alto","also"])).toEqual("alas");
  });
});
