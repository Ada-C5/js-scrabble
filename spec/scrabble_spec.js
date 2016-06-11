var Scrabble = require("../scrabble.js");

describe('wordScore', function() {
  // setup - new game of Scrabble
  var scrabble = new Scrabble();

  it("is present", function(){
  expect(scrabble !== undefined).toEqual(true);
  });

  it('returns the total points for a single word', function() {
    expect(scrabble.wordScore("charles")).toEqual(62);
  });

  it('returns zero for an empty input', function() {
    expect(scrabble.wordScore("")).toEqual(0);
  });

  it('returns the total points for a single word regardless of case', function() {
    expect(scrabble.wordScore("CHARLES")).toEqual(62);
  });

  it('returns the total points for a single word with bonus', function() {
    expect(scrabble.wordScore("tacocat")).toEqual(61);
  });
});

describe('highestScoreFrom', function() {
    // setup - new game of Scrabble
  var scrabble = new Scrabble();

  it('returns the highest scoring word from the input', function() {
    expect(scrabble.highestScoreFrom(["develop","jogged","doggies"])).toEqual("develop");
  });

  it("returns first word occuring in a tie to win", function(){
    expect(scrabble.highestScoreFrom(["jogged", "zebra", "develop", "pigsty", "doggies", "naysays", "mixup", "cramps", "zenith"])).toEqual("develop");
  });
});
  //
  // it('returns zero for an empty input', function() {
  //   expect(scrabble.wordScore("")).toEqual(0);
  // });
  //
  // it('returns the total points for a single word regadless of case', function() {
  //   expect(scrabble.wordScore("CHARLES")).toEqual(62);
  // });
  //
  // it('returns the total points for a single word with bonus', function() {
  //   expect(scrabble.wordScore("tacocat")).toEqual(61);
  // });


//
// describe('find', function() {
//     // setup - new game of Scrabble
//   var scrabble = new Scrabble();
//
//   it('returns the total points for a single word', function() {
//     expect(scrabble.wordScore("charles")).toEqual(12);
//   });
//
//
