var Scrabble = require("../scrabble.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  it('#score should not be undefined or null', function() {
    expect(scrabble.score("ada")).not.toBeUndefined();
    expect(scrabble.score("seattle")).not.toBeNull();
  });

  it('#score one word', function() {
    expect(scrabble.score("melissa")).toEqual(59);
    expect(scrabble.score("david")).toEqual(10);
  });

  it('#score and caps', function() {
  expect(scrabble.score("Melissa")).toEqual(59);
  expect(scrabble.score("DAVID")).toEqual(10);
  });

  it('#score words of seven letters should have more than 50 points', function() {
  expect(scrabble.score("Melissa")).toBeGreaterThan(50);
  expect(scrabble.score("jimison")).toBeGreaterThan(50);
  });

  it('#score should return a Number', function() {
    expect(scrabble.score("david")).toEqual(jasmine.any(Number));
  });

  it('#score should throw an error for words larger than 7 letters', function() {
    expect( function(){ scrabble.score("fantastic") }).toThrow("Enter a valid word, please");
    expect( function(){ scrabble.score("Cristina") }).toThrow("Enter a valid word, please");
  });

  it('#score should throw error for words with not alphabetic charaters', function() {
    expect( function(){ scrabble.score("$%@^me") }).toThrow("Enter a valid word, please");
    expect( function(){ scrabble.score("@#%$fr") }).toThrow("Enter a valid word, please");
  });

  it('#highestScoreFrom the word with highest score is not null or undefined ', function() {
    expect(scrabble.highestScoreFrom("I testins is awesome")).not.toBeUndefined();
    expect(scrabble.highestScoreFrom("I love living seattle")).not.toBeNull();
  });

  it('#highestScoreFrom is not null or undefined ', function() {
    expect(scrabble.highestScoreFrom("melissa jimison")).toEqual('jimison');
    expect(scrabble.highestScoreFrom("domingo lunes martes")).toEqual('domingo');
  });

  it('#highestScoreFrom and caps', function() {
  expect(scrabble.highestScoreFrom("Melissa y david")).toEqual("melissa");
  });

  it('#highestScoreFrom returns a string ', function() {
    expect(scrabble.highestScoreFrom("miercol")).toEqual(jasmine.any(String))
  });

});
