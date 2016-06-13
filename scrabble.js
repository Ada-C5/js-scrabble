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

function Player(name) {
  this.name = name;
  this.plays = [];

  this.play = function(word) {
    // Function which will adds the input word to the plays Array
    // Returns false if player has already won
    this.plays.push(word);
  };

  this.total_score = function() {
    total = 0
    words = this.plays
    for (var word of words) {
      total = total + Scrabble.score(word)
    };
    return total
  };

  this.hasWon = function () {
    if (this.total_score() >=  100){
      return true;
    } else {
      return false;
    }
  };

  this.highestScoringWord = function() {
    //Function which returns the highest scoring word the user has played.
    return Scrabble.highestScoreFrom(this.plays);
  };

  this.highestWordScore = function() {
    word = Scrabble.highestScoreFrom(this.plays)
    return Scrabble.score(word);
  }
}

// DEBUG:
// var mygame = new Scrabble();
// var myplayer = new Player("Eagle");
//
// console.log(myplayer.name);
//
// myplayer.play(2);
// console.log(mygame.score(2));
// myplayer.play("lemon");
// console.log(Scrabble.score("lemon"));
//
// console.log(myplayer.plays);
// console.log(myplayer.total_score());
// console.log(myplayer.hasWon());
// myplayer.play("QQQQQQ");
// myplayer.play("QQAA");
// console.log(myplayer.total_score());
// console.log(myplayer.hasWon());
// console.log(myplayer.highestScoringWord());
// console.log(myplayer.highestWordScore());
//
//
// console.log(Scrabble.score("AAAAAAF"));
// console.log(Scrabble.score("QQQQQQ"));
// console.log(Scrabble.highestScoreFrom(["EEEEEEF", "AAAAAAF", "QQQQQQ"]));


module.exports = Scrabble;
