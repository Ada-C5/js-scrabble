var Scrabble = function() {
  this._letter_scores = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2,
    H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1,
    O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1,
    V: 4, W: 4, X: 4, Y: 4, Z: 10
  };
};

Scrabble.prototype = {
  helloWorld: function() {return 'hello world!';},

  score: function(word) {
    if (!word.match(/^[a-z]+$/i)) {
      return "Words can only contain letters (no symbols or spaces)";
    }

    var word_score = 0;
    for (var letter of word.toUpperCase()) {
      word_score += this._letter_scores[letter];
    }

    if (word.length === 7) {
      word_score += 50;
    }

    return word_score;
  },

  highestScoreFrom: function(arrayOfWords) {
    var max_score = 0;
    var max_word = '';

    for (var word of arrayOfWords) {
      var score = this.score(word);

      if (score >= max_score && max_word.length < 7) {
        if (score > max_score || word.length === 7 || word.length < max_word.length) {
          max_score = score;
          max_word = word;
        }
      }
    }

    return max_word;
  }
}

module.exports = Scrabble;
