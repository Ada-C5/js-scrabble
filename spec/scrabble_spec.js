var Scrabble = require("../scrabble.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  it('Score one word', function() {
    expect(scrabble.score("fantastic")).not.toBeUndefined();
    expect(scrabble.score("seattle")).not.toBeNull();
    expect(scrabble.score("melissa")).toEqual(59);
    expect(scrabble.score("Melissa")).toEqual(59);
    expect(scrabble.score("david")).toEqual(10);
    expect(scrabble.score("david")).toEqual(jasmine.any(Number))
  });

  it('Shows the word with highest score', function() {
    expect(scrabble.highestScoreFrom("I testins is awesome")).not.toBeUndefined();
    expect(scrabble.highestScoreFrom("I love living seattle")).not.toBeNull();
    expect(scrabble.highestScoreFrom("melissa jimison")).toEqual('jimison');
    expect(scrabble.highestScoreFrom("Melissa y david")).toEqual("melissa");
    expect(scrabble.highestScoreFrom("domingo lunes martes")).toEqual('domingo');
    expect(scrabble.highestScoreFrom("miercoles")).toEqual(jasmine.any(String))

  });

});
