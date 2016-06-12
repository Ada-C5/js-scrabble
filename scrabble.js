

var Scrabble = function() {};

var lookupPoints = {
                      'a': 1,
                      'e': 1,
                      'i': 1,
                      'o': 1,
                      'u': 1,
                      'l': 1,
                      'n': 1,
                      'r': 1,
                      's': 1,
                      't': 1,
                      'd': 2,
                      'g': 2,
                      'b': 3,
                      'c': 3,
                      'm': 3,
                      'p': 3,
                      'f': 4,
                      'h': 4,
                      'v': 4,
                      'w': 4,
                      'y': 4,
                      'k': 5,
                      'j': 8,
                      'x': 8,
                      'q': 10,
                      'z': 10
};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {
  // returns the total score value for the given word. 
  // The word is input as a string (case insensitive). 
  // The chart below shows the point value for a given letter.
  var score_accumulator = 0;
  if (word.length > 6 ) {
    score_accumulator = score_accumulator + 50;
  }
  for (var i = 0; i < word.length; i++) {
    score_accumulator = score_accumulator + lookupPoints[word[i]];
  }
  return score_accumulator;
}

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highestScoringWord = '',
      highestScore = 0;
  for (var word of arrayOfWords) {
    if (this.score(word) > highestScore) {
      highestScoringWord = word;
      highestScore = this.score(word);
    }
  }

 return highestScoringWord;
}



module.exports = Scrabble;

//  + this.score(word.substring(1, (word.length - 1)))

