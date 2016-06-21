//jeremy's scrabble.js
var Scrabble = require('.scrabble.js')
var scorer = new Scrabble();

function Player(name, Scorer) {
this._name       = name;
this._plays      = [];
this._score      = 0;
this._scorer     = new Scorer();
this._high_score = 0;
this._best_word  = '';

}

Player.prototype = {
  //here are accessors
name:               function() { return this._name;},
plays:              function() { return this._plays},
total_score:        function() { return this._score;},
hasWon:             function() { return this.score >= 100;},
highestScoringWord: function() { return this.best_word;},
highestWordScore:   function() {return this._high_score;},
}

play: function(word) {
  var score this._scorer.score(word);
   if (typeof score === 'number') {
     this._new_high_score(score, word);
     this._add_to_score(score);
     this._plays.push(word);
     return score
   } else {
     throw "word wasn't scorable";
   }
};

//functions
_new_high_score: function(score, word) {
  if (score > this._high_score) {
    this._best_word = word;
    this._high_score = score;
  }
}
