var Scrabble = require("../scrabble.js");

describe ('Score(word)', function() {
  var scrabble = new Scrabble();

  it ("returns sum of 5 for the word 'cat'", function() {
    expect(scrabble.score("cat")).toEqual(5);
  });

  it ("returns sum of 5 for the word 'aeiou'", function() {
    expect(scrabble.score("aeiou")).toEqual(5);
  });

  it ("returns sum of 61 for the word 'tacocat'", function() {
    expect(scrabble.score("tacocat")).toEqual(61);
  });

  it ("returns sum of 57 for the word 'aeiouae'", function() {
    expect(scrabble.score("aeiouae")).toEqual(57);
  });

  it ("returns sum of 70 for the word 'cacique'", function() {
    expect(scrabble.score("cacique")).toEqual(70);
  });

  it ("returns sum of 0 for the word 'empty string'", function() {
    expect(scrabble.score("")).toEqual(0);
  });

  it ("returns sum of 61 for the mix cased word 'TacOcAt'", function() {
    expect(scrabble.score("TacOcAt")).toEqual(61);
  });
});
