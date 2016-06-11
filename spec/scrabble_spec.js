var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });

});

describe('score', function() {
  var scrabble = new Scrabble();

  it('returns a number', function() {
    expect(scrabble.score("DOG")).//to return something of type number
  });

  it("returns the correct score for a word", function() {
    expect(scrabble.score("DOG")).toEqual(5);
  });

  it("throws an error when given anything other than an English alphabet letter", function () {
    expect(scrabble.score("").//to be of type error, or whatever
    expect(scrabble.score(" ").//to be of type error, or whatever
    expect(scrabble.score(2).//to be of type error, or whatever
    expect(scrabble.score("2").//to be of type error, or whatever
    expect(scrabble.score("~").//to be of type error, or whatever
    expect(scrabble.score("愛").//to be of type error, or whatever
    expect(scrabble.score(" w o w すごい 99").//to be of type error, or whatever
  });


  // it("is not case-sensitive", function() {
  //   expect(scrabble.score("dog").)
  // });

});
