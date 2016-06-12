var Scrabble = require("../scrabble.js");
var Player = require("../player.js");

describe('Scrabble Player', function() {
  var jade = new Player('Jade');

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
    var andy = new Player('Andy'); 
    var playSomeWords = ['kittens', 'puppies', 'ducklings']; 
    expect(andy.totalScore(playSomeWords)).toEqual(191);
  });
  it('Returns the highest scoring word', function() {
    var andy = new Player('Andy'); 
    var playSomeWords = ['kittens', 'puppies', 'ducklings']; 
    expect(andy.highestScoringWord(playSomeWords)).toEqual('ducklings');
  });  
}); 
