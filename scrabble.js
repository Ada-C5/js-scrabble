var Scrabble = function() {};
// s = new Scrabble
// s.helloWorld()

Scrabble.prototype.helloWorld = function() {
  console.log('hello world!');
};

Scrabble.prototype.score = function(word) {

  this._word = word.toUpperCase();

  var num_array = [];

  var mapObj = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5, J: 8, X: 8, Q: 10, Z: 10
  };

  var bonus = 50;

  var num_string = this._word.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/gi, function(matched){
    return mapObj[matched];
  });

  var i = num_string.length;

  while (i--) {
    num_array.push(Number(num_string[i]));
  }

// console.log(num_array)

  var score = num_array.reduce(function(a, b) { return a + b; }, 0);

   if (this._word.length === 7 ) {
     score += bonus;
   };

  console.log(score);

};


// If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
//If the there are multiple words that are the same score and same length, pick the first one in supplied list.


Scrabble.prototype.highestScoreFrom(array) {

// need score of single word, the word array, and the highest scoring word:
  var highest_scoring_word = ' '
  var word_score = 0
  var highest_score = 0,

//each loop:
  for (var word of array) {
    //do the word score function:
    var word_score = Scrabble.prototype.score( word )
    if (word_score > highest_score) {
      highest_score = word_score
      highest_scoring_word = word
    }
    else if ((word_score === highest_score) {
    var highest_word = Scrabble.prototype.shortest( highest_scoring_word, word )
    return new_winner; //im getting confused here...
  };
};

Scrabble.prototype.shortestWord(highest_scoring_word, word) {

  if (highest_scoring_word.length > word.length) {
    var new_winner = highest_scoring_word
    return new_winner;
  }
  else {
    var new_winner = word
    return new_winner;
  };
};

module.exports = Scrabble;
