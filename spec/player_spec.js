var Scrabble = require("../scrabble.js");
var Player = require("../player.js");

describe('Scrabble Player', function() {
  var jade = new Player('jade');

  it('Knows the name of the player', function() {
    expect(jade.name).toEqual('jade');
  });

  it('Allows a player to play a word', function() {
    var playAWord = 'word'; 
    expect(jade.play(playAWord)).toEqual(['word']);
  });

  it('Correctly adds words to the played words array', function() {
    var playAnotherWord = 'kittens'; 
    expect(jade.play(playAnotherWord)).toEqual(['word', 'kittens']);
  });

    it('Correctly scores player total score', function() {
    var andy = new Player('Andy'); 
    var playSomeWords = ['kittens', 'puppies', 'ducklings']; 
    expect(andy.totalScore(playSomeWords)).toEqual(191);
  }); 
}); 
