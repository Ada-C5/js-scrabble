function Scrabble() {

  this.score = function(word) {
    var hash = { "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
                 "D": 2, "G": 2,
                 "B": 3, "C": 3, "M": 3, "P": 3,
                 "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
                 "K": 5,
                 "J": 8, "X": 8,
                 "Q": 10, "Z": 10
               };
    var total = 0;
    if (typeof word === "string"){
      for (var letter of word.toUpperCase()) {
        total += hash[letter];
      }
      if (word.length === 7) {
        total += 50;
      }
      return total
    } else {
      throw "not a string";
    }

  },

  this.highestScoreFrom = function(arrayOfWords) {
    var scoredWords = {}
    for (var word of arrayOfWords) {
      total = this.score(word)
      scoredWords[word] = total
    }

    highestScore = 0;
    highestLength = 10000000000;
    for (var word in scoredWords) {
      score = scoredWords[word]
      if (score === highestScore && word.length < highestLength && highestLength != 7) {
        highestScore = score;
        highestWord = word;
        highestLength = word.length;
      } else if (score > highestScore) {
        highestScore = score;
        highestWord = word;
        highestLength = word.length;
      };
    }
    return highestWord
  }
};

module.exports = Scrabble;
