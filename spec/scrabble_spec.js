var Scrabble = require("../scrabble.js");

var scrabble = new Scrabble();
var word = "cat";
var array = ["cat", "lemon", "pickle", "aaaaaaaaacc", "eeeeeeex"];

describe('Scrabble', function() {
  it('scores a given word', function() {
    expect(scrabble.score(word)).toEqual(5);
  });

  it('returns a number greater than 0', function() {
    expect(scrabble.score(word)).toBeGreaterThan(0);
  });

  it('does not return null'), function() {
    expect(scrabble.score(word)).toNotBe(null);
  };

  it('has a defined return'), function() {
    expect(scrabble.score(word)).toBeDefined();
  };
});

describe('Scrabble', function() {
  it('returns the highest score from an array of words', function() {
    expect(scrabble.highestScoreFrom(array)).toEqual({ word: 'eeeeeeex', score: 65, index: 4 });
  });

  it('returns an object with properties word, score, index', function() {
    expect(scrabble.highestScoreFrom(array)["word"]).toEqual('eeeeeeex');
    expect(scrabble.highestScoreFrom(array)["score"]).toEqual(65);
    expect(scrabble.highestScoreFrom(array)["index"]).toEqual(4);
  });

  it('does not return null'), function() {
    expect(scrabble.highestScoreFrom(array)).toBeDefined();
  };

  it('has a defined return'), function() {
    expect(scrabble.highestScoreFrom(array)).toBeDefined();
  };

});



// jasmine matchers
// to(N­ot)­Be( null | true | false )
// to(N­ot)­Equ­al( value )
// to(N­ot)­Mat­ch( regex | string )
// toBe­Def­ine­d()
// toBe­Und­efi­ned()
// toBe­Nul­l()
// toBe­Tru­thy()
// toBe­Fal­sy()
// to(N­ot)­Con­tain( string )
// toBe­Les­sTh­an( number )
// toBe­Gre­ate­rTh­an( number )
// toBe­NaN()
// toBe­Clo­seTo( number, precision )
// toTh­row()
