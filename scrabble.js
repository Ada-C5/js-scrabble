
function Scrabble(score_chart) {
  this.score_chart = {
    "A": 1,
    "E": 1,
    "I": 1,
    "O": 1,
    "U": 1,
    "L": 1,
    "N": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10
  };
};

Scrabble.prototype.score = function(word) {

  var word_score = 0;
  word = word.toUpperCase();
  var length = word.length

  // score each letter in the word
  for (var index = 0; index < length; index++) {
    word_score += this.score_chart[word[index]];
  };

  // add 50 pts if 7+ letters
  if (length >= 7) {
    word_score += 50;
  };

  console.log(word_score);
  return word_score;
};

Scrabble.prototype.find_ties = function(array_of_words) {
// score each word
// if two are tied, return shorter word
// if two are tied but one has 7+ letters, return 7+ letter word
// if two are tied in points & length, return first in array_of_words
};



// def self.find_ties(array_of_words)
//     # If multiple words have the same highest-score, return the word with the least letters
//     sort_pairs(array_of_words).find_all { |pair| pair[1] == sort_pairs(array_of_words)[-1][1] }
//     #=> Ex: TEST_WORD_ARRAY3 => [["bcmpbcg", 70]]
//     #=> Ex: TEST_WORD_ARRAY2 => [["jeez", 20], ["furzy", 20]]
//   end
//
//   def self.ties_w_seven_letters(array_of_words)
//     find_ties(array_of_words).find_all { |word, points| word.length == 7 }
//     #=> Ex: TEST_WORD_ARRAY5 => [["bgeeeee", 60]]
//   end
//
//   # Returns the highest-valued word in a word_array.
//   def self.highest_score_from(array_of_words, index)
//     if find_ties(array_of_words).length > 1
//       if ties_w_seven_letters(array_of_words).length >= 1
//         return ties_w_seven_letters(array_of_words)[0][index]
//       else
//         least_letters = find_ties(array_of_words).min_by { |pair| pair[0].length}
//         return least_letters[index]
//       end
//     end
//     # Returns the highest-scoring word.
//     p sort_pairs(array_of_words)[-1][index]
//     # "affined"
//     # "bcmpbcg"
//   end


// actually run it
// var scrabble = new Scrabble();
// scrabble.score("cat")

module.exports = Scrabble;
