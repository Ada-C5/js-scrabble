var Scrabble = function() {
  this._tilepoints = {
    'A':1,
    'B':3,
    'C':3,
    'D':2,
    'E':1,
    'F':4,
    'G':2,
    'H':4,
    'I':1,
    'J':8,
    'K':5,
    'L':1,
    'M':3,
    'N':1,
    'O':1,
    'P':3,
    'Q':10,
    'R':1,
    'S':1,
    'T':1,
    'U':1,
    'V':4,
    'W':4,
    'X':8,
    'Y':4,
    'Z':10
  };
};

// YOUR CODE HERE

// finds the total score for a word
//  ** no checks for edge/faulty cases **
Scrabble.prototype.score = function(word) {
  var wordy = word.toUpperCase();
  var score = 0;

  if ((wordy.length > 7) || (wordy.length < 1)) {
    return 'Unacceptable word!!';
  };

  for (var index in wordy) {
    score += this._tilepoints[wordy[index]];
  };

  (wordy.length === 7)? score+= 50: ""
  return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var points = 0;
  var arrayOfPoints = [];
  var objectOfWordAndPoints = {};

  // for each word store the points in an array
  // and store the points: [word, tie] in an object
  for (var word of arrayOfWords) {
    points = this.score(word);
    arrayOfPoints.push(points);
    // if keys exists, add to array, else make an array.
    objectOfWordAndPoints[points]? objectOfWordAndPoints[points].push(word) : objectOfWordAndPoints[points] = [word]; //
  };

  //  find the max points
  var max = Math.max.apply(Math, arrayOfPoints);

  // deal with a tie
  if (objectOfWordAndPoints[max].length > 1) {
    var shortestword = 0;
    var tiearray = objectOfWordAndPoints[max];

    for (var i = 0; i >= tiearray.length; i++) {
      if (tiearray[i].length < tiearray[i+1].length) {
        shortestword = i;
      } else {
        shortestword = i+1;
      }
      // word.length
    }
    return objectOfWordAndPoints[max][shortestword];
  }
  return objectOfWordAndPoints[max][0];
};

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;
