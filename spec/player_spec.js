var Scrabble = require("../scrabble.js");
var Player = require("../player.js");

describe('Scrabble Player', function() {
  var jade = new Player('Jade');

  it('Scrabble exists and is accessible', function() {
    expect(Scrabble).toNotEqual(null);
  });

  it('Player exists and is accessible', function() {
    expect(Player).toNotEqual(null);
  });

  it('Knows the name of the player', function() {
    expect(jade.name).toEqual('Jade');
  });

  it('Allows a player to play a word', function() {
    var playAWord = 'word'; 
    expect(jade.play(playAWord)).toEqual(['word']);
  });

  it('Correctly adds words to the played words array', function() {
    var playAnotherWord = 'kittens'; 
    expect(jade.play(playAnotherWord)).toEqual(['word', 'kittens']);
  });

  it('Returns true if the player has scored <= 100 points', function() {
    var andy = new Player('Andy'); 
    var playSomeWords = ['kittens', 'puppies', 'ducklings']; 
    expect(andy.hasWon(playSomeWords)).toEqual(true); 
  }); 

  it('Returns false if the player has scored >= 100 points', function() {
    var harley = new Player('Harley'); 
    var playSomeWords = ['bork', 'woof', 'arooo']; 
    expect(harley.hasWon(playSomeWords)).toEqual(false); 
  }); 

  it('Correctly scores player total score', function() {
    var jeremy = new Player('Jeremy'); 
    var playSomeWords = ['elixir', 'rails', 'javascript']; 
    expect(jeremy.totalScore(playSomeWords)).toEqual(92);
  });
  it('Returns the highest scoring word', function() {
    var kari = new Player('Kari'); 
    var playSomeWords = ['kylo', 'cutest', 'puppy']; 
    expect(kari.highestScoringWord(playSomeWords)).toEqual('puppy');
  });

  it('Returns the highest scoring word score from an array of words', function() {
    var charles = new Player('Charles'); 
    var playSomeWords = ['pretty', 'awesome', 'instructor']; 
    expect(charles.highestWordScore(playSomeWords)).toEqual(62);
  });

  it('Returns the highest score from a single word played', function() {
    var george = new Player('George'); 
    var playAWord = ['mushroom']; 
    expect(george.highestWordScore(playAWord)).toEqual(65);
  });    
}); 
