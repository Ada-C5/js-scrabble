var Scrabble = require("../scrabble.js");
var Scrabble = require("../player.js");

describe('Scrabble', function() {
  var scrabble = new Scrabble();

  it('#score should not be undefined or null', function() {
    expect(scrabble.score("ada")).not.toBeUndefined();
    expect(scrabble.score("seattle")).not.toBeNull();
  });

  it('#score should return the points of one word', function() {
    expect(scrabble.score("melissa")).toEqual(59);
    expect(scrabble.score("david")).toEqual(10);
  });

  it('#score should be able to habdle upcase and return lowercase', function() {
    expect(scrabble.score("Melissa")).toEqual(59);
    expect(scrabble.score("DAVID")).toEqual(10);
  });

  it('#score should return a number grater than 50 points for words of seven letters', function() {
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

  it('#highestScoreFrom should return the word with highest score is not null or undefined ', function() {
    expect(scrabble.highestScoreFrom("I testins is awesome")).not.toBeUndefined();
    expect(scrabble.highestScoreFrom("I love living seattle")).not.toBeNull();
  });

  it('#highestScoreFrom should return to the word with highest score', function() {
    expect(scrabble.highestScoreFrom("melissa jimison")).toEqual('jimison');
    expect(scrabble.highestScoreFrom("domingo lunes martes")).toEqual('domingo');
  });

  it('#highestScoreFrom should be able to habdle upcase and return lowercase', function() {
    expect(scrabble.highestScoreFrom("Melissa y David")).toEqual("melissa");
  });

  it('#highestScoreFrom should return a string ', function() {
    expect(scrabble.highestScoreFrom("miercol andres bogota")).toEqual(jasmine.any(String))
  });

  it('#highestScoreFrom should throw an error for words larger than 7 letters', function() {
    expect( function(){ scrabble.score("david fantastic melissa") }).toThrow("Enter a valid word, please");
    expect( function(){ scrabble.score("melissa doce Cristina") }).toThrow("Enter a valid word, please");
  });

  it('#highestScoreFrom should throw error for words with not alphabetic charaters', function() {
    expect( function(){ scrabble.score("$%@^me melissa david") }).toThrow("Enter a valid word, please");
    expect( function(){ scrabble.score("lunes martes @#%$fr") }).toThrow("Enter a valid word, please");
  });

});


describe('Player', function() {
  var player = new Player("melissa");

  it('#player should not be undefined or null', function() {
    expect(player.name()).not.toBeUndefined();
    expect(player.name()).not.toBeNull();
    expect(player.name("david")).toEqual(jasmine.any(String));
  });

  it('#player should not be undefined or null', function() {
    expect(player.plays()).not.toBeUndefined();
    expect(player.plays()).not.toBeNull();
    expect(player.plays("david")).toEqual(jasmine.any(Array));

  });

});
