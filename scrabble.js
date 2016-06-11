var Scrabble = {

  score: function(word) {
    var hash = { "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
                 "D": 2, "G": 2,
                 "B": 3, "C": 3, "M": 3, "P": 3,
                 "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
                 "K": 5,
                 "J": 8, "X": 8,
                 "Q": 10, "Z": 10
               };
    var total = 0;
    for (var letter of word.toUpperCase()) {
      total += hash[letter];
    }
    return total
  },

  highestScoreFrom: function(arrayOfWords) {
    var scoredWords = {}
    for (var word of arrayOfWords) {
      total = this.score(word)
      scoredWords[word] = total
    }

    highestSoFar = 0
    for (var word in scoredWords) {
      score = scoredWords[word]
      if (score > highestSoFar) {
        highestSoFar = score;
        highestWord = word;
      };
    }
    return highestWord
  }
};

// console.log(Scrabble.score("ania"));
// console.log(Scrabble.highestScoreFrom(["an", "pterodactilo", "ani", "ania", "angaraparangaracutirimicuaro"]));


module.exports = Scrabble;
