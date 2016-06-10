var Scrabble = function() {};

var letter_scores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
}

Scrabble.prototype.score = function(word) {
  upword = word.toUpperCase()
  score = 0
  for (var letter of upword) {
    score += letter_scores[letter]
  }
  if (word.length === 7) {
    score += 50;
  }
  return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var words_with_scores = {};
  var winning_words = []
  for (var word of arrayOfWords) {
    words_with_scores[word] = this.score(word);
  }
  var max = Math.max.apply(null,Object.keys(words_with_scores).map(function(x){ return words_with_scores[x] }));
  for (var word in words_with_scores){
    if (words_with_scores[word] === max){
      winning_words.push(word);
    }
  }
  if (winning_words.length === 1){
    return winning_words[0];
  } else {
    words_with_lengths = {};
    for (var word of winning_words){
      words_with_lengths[word] = word.length;
    }
    var min = Math.min.apply(null,Object.keys(words_with_scores).map(function(x){ return words_with_scores[x] }));
    for (var word in words_with_lengths){
      if (words_with_lenghts[word] === min){
        return word;
      }
    }
  };
};


module.exports = Scrabble;



// var maxKey = _.max(Object.keys(obj), function (o) { return obj[o]; });




// highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
//     Note that it’s better to use fewer tiles, so if the top score is tied between multiple words,
//       pick the one with the fewest letters.
//     Note that there is a bonus (50 points) for using all seven letters.
//       If the top score is tied between multiple words and one used all seven letters,
//       choose the one with seven letters over the one with fewer tiles.
//       If the there are multiple words that are the same score and same length, pick the first one in supplied list.
