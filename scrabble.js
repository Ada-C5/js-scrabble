var Scrabble = function(x) {
  this._x = x;
};

Scrabble.prototype = {
  chart: {
    "a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1,
    "d": 2, "g": 2,
    "b": 3, "c": 3, "m": 3, "p": 3,
    "f": 4, "h": 4, "v": 4, "w": 4, "y": 4,
    "k": 5,
    "j": 8, "x": 8,
    "q": 10, "z": 10
  },

  // Left helloworld code and test in for reference purposes. This is intentional.
  helloWorld: function() {
    return 'hello world!';
  },

  score: function(_x) {
    var score_tally = 0,
        _x = _x.toLowerCase()

      for (var letter of _x) {
        if (!letter.match(/[a-z]/i)) {
          throw "Invalid character."
        };
      score_tally += Scrabble.prototype.chart[letter]
      };

      if (_x.length === 7) {
        score_tally += 50
      }
    return score_tally;
  },

  shortest: function(current_loop_word, highest_loop_word) {
    if (current_loop_word.length > highest_loop_word.length) {
      return highest_loop_word;
    }
    else if (current_loop_word.length < highest_loop_word.length) {
      return current_loop_word;
    }
    else {
      return highest_loop_word;
    };
  },

  highestScoreFrom: function(_x) {
    var word_score = 0,
        highest_score = 0,
        highest_word = ""

    for (var word of _x) {
      var word_score = Scrabble.prototype.score(word)
      if (word_score > highest_score) {
        highest_score = word_score
        highest_word = word
      }
      else if ((word_score === highest_score) && (word.length !== 7) && (highest_word.length !== 7) || ((word.length === 7) && (word.length === 7))) {
        var highest_word = Scrabble.prototype.shortest(word, highest_word)
      }
      else if ((word_score === highest_score) && (word.length === 7)) {
        var highest_word = word
      }
    };
    return highest_word;
  }
};


var rando_array = ["word", "poop", "water", "exit", "qqqqqqq", "zzzzzzz"]
var player = new Scrabble
console.log(player.score("word"))
console.log(player.highestScoreFrom(rando_array))


module.exports = Scrabble;
