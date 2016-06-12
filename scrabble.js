var Scrabble = function() {};

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

Scrabble.prototype.score = function(word) {

  var scoring_chart = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
  };

  // converts input to a string and makes the input case-insensitive
  word = String(word).toUpperCase();

  //catches the first instance of anything that's NOT a letter
  if (/[^a-z]/i.test(word) === true) {
    throw "Word should only contain letters of the English alphabet.";
  } else {
    var total_score = 0;
    for (var letter of word) {
      total_score += scoring_chart[letter]; //the corresponding value for that letter
    };

    //checks to see if any bonus points are applicable
    bonus = this.bonusPoints(word);
    total_score += bonus;

    return total_score;
  };
};

Scrabble.prototype.bonusPoints = function(word) {
  var bonus = 0;

  //if word is 7 letters long, give 50 bonus points
  if (word.length === 7) {
    bonus += 50;
  }

  return bonus;
}

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

  // put all the word scores into a new array together
  all_scores = [];
  for (var word of arrayOfWords) {
    all_scores.push(this.score(word));
  }

  // find max score
  // I still don't quite understand 'apply', but apparently I can't use Math.max on an array without it
  highest_score = Math.max.apply(null, all_scores);

  //for the words in arrayOfWords that have that score, push those into a new array of words to work with
  words_with_highest_score = [];
  for (var word of arrayOfWords) {
    if (this.score(word) === highest_score) {
      words_with_highest_score.push(word);
    }
  }

  // if there's only one word with the highest score, return it
  if (words_with_highest_score.length === 1) {
    highest_scoring_word = words_with_highest_score[0];
  // but if there are multiple words with that same score
  } else {
    // (just to start the length comparison somewhere, here's a really long word that will always be overwritten by a word with less tiles)
    var highest_scoring_word = "pneumoultramicroscopicsilicovolcanoconiosisyaaaaaaaay";
    for (var word of words_with_highest_score) {
      // the word with a length of 7 wins
      if (word.length >= 7) {
        highest_scoring_word = word;
        // stop looping so that it's the first one supplied that wins
        break;
      } else {
        // otherwise the word with the least tiles wins
        if (word.length < highest_scoring_word.length) {
          highest_scoring_word = word;
        }
      }
    }
  }

  return highest_scoring_word;
};



//testing stuff out
s = new Scrabble();


var arrayOfWords = ["zzzzzz", "aaaaaaa", "dog", "cat", "monkey", "zzzzzx", "aaaaaae"]
console.log(s.highestScoreFrom(arrayOfWords));


module.exports = Scrabble;
