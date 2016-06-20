//jeremy's test
//this mock removes dependency, just returns whatever is given so player can do its thing without worrying about score
var Player = require('../player.js').
   ScoreMock = function() {
     this.score = function(x) {return x;}
   }:


 describe ('Player', function() {
 var jnf, baf;

 beforeEach(function() {
  jnf = new Player( 'jnf', ScoreMock);
  baf = new Player( 'baf', ScoreMock);
 });

 describe('#play', function() {
   var result;

   beforeEach(function() {
     result = jnf.play(4);
   })
 })

describe('when scorere can not score word'), function () {
  var bad_play = function () {_jnf.play('broken');}
  it('throws an error', function() {
    expect(bad_play).toThrow();
  })
}



 })
//this will check score of every letter
var scores = {
  A:1, E:1, I: 1, // so on, put all values in here
}
 describe ("#score", function() {
   for (var letter of Object.keys(scores)) {
     var value = scores[letter];
     it ('scores' + letter + 'as' + 'value' + 'point', function() {
       expect(scrabble.score(letter)).toEqual(value);
     })
   }
 })
