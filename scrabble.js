var prompt = require('prompt');

var Scrabble = function() {};

Scrabble.prototype.helloWorld = function() {
  console.log('hello world!');
};

Scrabble.prototype.score = function(word) {
  this._word = word.toUpperCase();

  var num_array = [];

  var mapObj = {
     A:1,
     B:3,
     C:3,
     D:2,
     E:1,
     F:4,
     G:2,
     H:4,
     I:1,
     J:8,
     K:5,
     L:1,
     M:3,
     N:1,
     O:1,
     P:3,
     Q:10,
     R:1,
     S:1,
     T:1,
     U:1,
     V:4,
     W:4,
     X:8,
     Y:4,
     Z:10
  };

  var num_string = this._word.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/gi, function(matched){
    return mapObj[matched];
  });

  var i = num_string.length;

  while (i--) {
    num_array.push(Number(num_string[i]));
  }

  var score = num_array.reduce(function(a, b) { return a + b; }, 0);

  if (num_array.length == 7) {
    score += 50;
  }

  return score
};

// this._arrayofwords = ["anna","bryan","paddy"];
// s.highscore(["anna","bryan","paddy"])
// make a hash of these words and scores instead?
// arrayofscores = [4,10,6]

Scrabble.prototype.highscore = function(arrayOfWords) {
  this._arrayofwords = arrayOfWords;

  wordsandscores = {};

  for (var word of this._arrayofwords) {
    wordsandscores[word] = this.score(word);
  }

/// TEST OUT HASH MAPPING
// var hashPetName = {
//     dog: "Rex",
//     cat: "Mistigri"
//   }
///

};


///

/// HOW TO GET INDEX OF ARRAY OF SCORES
      // var arrayofscores = [10,6,3,2]
      // for (var score of arrayofscores) {
      //   console.log(arrayofscores.indexOf(score));
      // }
///

// var highestscorewords = [];
// var highestscore = 0;
// for (var score of arrayofscores) {
//   if (score > highestscore) {
//     highestscore = score;
//   } else if (score === highestscore) {
//     //if score is 7 letters,
//   }
// };

  //iterate through array, save highest score as var


// `highestScoreFrom(arrayOfWords)`:
// returns **the word in the array with the highest score**.
//
// 1. Note that it’s better to use fewer tiles,
// so if the top score is tied between multiple words, pick the one with the fewest letters.
//
// 3. If the top score is tied between multiple words and one used all seven letters,
// choose the one with seven letters over the one with fewer tiles.
//
// 4. If the there are multiple words that are the same score and same length,
// pick the first one in supplied list.

module.exports = Scrabble;
