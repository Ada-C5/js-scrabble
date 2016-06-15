var Scrabble = function() {};

// s = new Scrabble
// s.helloWorld()

Scrabble.helloWorld = function() {
  return 'hello world!'
};

Scrabble.score = function(word) {

  var upper_word = word.toUpperCase();

  var score = 0

  var mapObj = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10
  };

  var bonus = 50;

  for (var letter of upper_word) {
    score += mapObj[letter];
  }

  if (upper_word.length === 7 ) {
    score += bonus;
  }

  console.log(score);
  return score;

};
//
// // If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
//If the there are multiple words that are the same score and same length, pick the first one in supplied list.
//
//
Scrabble.highestScoreFrom= function(array) {

  // need score of single word, the word array, and the highest scoring word:
  var highest_scoring_word = ""
  var word_score = 0
  var highest_score = 0

  //each loop:
  for(var word of array) {
    //do the word score function:
    var word_score = Scrabble.score( word )
    if (word_score > highest_score) {
      highest_score = word_score;
      highest_scoring_word = word;
    } else if (word_score === highest_score) {
        if (word.length === 7 || highest_scoring_word.length === 7 ) {
          if (highest_scoring_word.length !== 7) {
            highest_scoring_word = word;
          }
        } else if (highest_scoring_word.length !== word.length) {
          if (highest_scoring_word.length > word.length) {
            highest_scoring_word = word;
          }
        }

    }
  }
  return highest_scoring_word;
};


module.exports = Scrabble;
