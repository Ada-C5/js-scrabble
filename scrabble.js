var Scrabble = function() {
  this.tile_score = { 
    'A' : 1, 
    'B' : 3, 
    'C' : 3,
    'D' : 2, 
    'E' : 1, 
    'F' : 4,
    'G' : 2, 
    'H' : 4, 
    'I' : 1,
    'J' : 8, 
    'K' : 5, 
    'L' : 1,
    'M' : 3, 
    'N' : 1, 
    'O' : 1,
    'P' : 3, 
    'Q' : 10, 
    'R' : 1,
    'S' : 1, 
    'T' : 1, 
    'U' : 1, 
    'V' : 4, 
    'W' : 4,
    'X' : 8, 
    'Y' : 4, 
    'Z' : 10 
  };
};

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {
  var word = word.toUpperCase();
  var score = 0; 
  var wordCheck = word.match(/(\W)*/g); 
  
  // check input for garbage
  // I'm worried about asynchronous insanity 
  if (wordCheck[0].length !== 0) {
    throw('this is not valid input!');  
  }
  
  // apply the bonus
  if (word.length >= 7) {
    score += 50; 
  }

  // score with a loop
  for (var i = 0; i < word.length; ++i) {
    score += this.tile_score[word.charAt(i)];
  }
  return score; 
}

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
    // Array of words comes in
    // each word needs to be scored and tracked
    // 7 letter words + 50 point bonus
    // Rules for ties: 
      // choose the shortest highing score word EXCEPT:
      // words that use all 7 tiles trump shorter words 
      // If many words all have the same length and score, pick the first supplied [0]
    // return the highest scoring word, not the score 
  }
module.exports = Scrabble;
