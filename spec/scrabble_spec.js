var Scrabble = require("../scrabble.js");
var scrabble = new Scrabble();

describe("score", function() {
  // it("returns a number", function() {
  //   expect(scrabble.score("DOG")).//to return something of type number
  // });

  it("returns the correct score for a word", function() {
    expect(scrabble.score("DOG")).toEqual(5);
  });

  it("is not case-sensitive", function() {
    expect(scrabble.score("dog")).toEqual(5);
  });

  it("will include a 50-point bonus for words of 7 letters or more", function() {
    expect(scrabble.score("aaaaaaa")).toEqual(57);
  });

  // it("throws an error when given anything other than an English alphabet letter", function () {
  //   expect(scrabble.score("").//to be of type error, or whatever
  //   expect(scrabble.score(" ").//to be of type error, or whatever
  //   expect(scrabble.score(2).//to be of type error, or whatever
  //   expect(scrabble.score("2").//to be of type error, or whatever
  //   expect(scrabble.score("~").//to be of type error, or whatever
  //   expect(scrabble.score("愛").//to be of type error, or whatever
  //   expect(scrabble.score(" w o w すごい 99").//to be of type error, or whatever
  // });
});

describe("highestScoreFrom", function() {
  it("will return the word with the highest score", function() {
    expect(scrabble.highestScoreFrom(["dog", "zoo"])).toEqual("zoo");
  });

  it("will return the word with 7 letters if multiple words with same score", function() {
    // zzzzzz: 6 letters, 60 pts
    // aaaaaaf: 7 letters, 60 pts (through bonus)
    expect(scrabble.highestScoreFrom(["zzzzzz", "aaaaaaf"])).toEqual("aaaaaaf");
    // making sure order of array is not relevant
    expect(scrabble.highestScoreFrom(["aaaaaaf", "zzzzzz"])).toEqual("aaaaaaf");
  });

  it("will return ", function() {

  });
  //
  // it("", function() {
  //
  // });
  //
  // it("will never return supercalifragilisticexpialidocious", function() {
  //   //refute that result will equal supercalifragilisticexpialidocious
  // });



});
