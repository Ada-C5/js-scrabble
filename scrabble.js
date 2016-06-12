var Scrabble = function() {};

// setup score key
Scrabble.prototype.score_key = {
  1:  ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2:  ["D", "G"],
  3:  ["B", "C", "M", "P"],
  4:  ["F", "H", "V", "W", "Y"],
  5:  ["K"],
  8:  ["J", "X"],
  10: ["Q", "Z"]
};

Scrabble.prototype.getKey = function(value) {
  var value = value.toUpperCase();
  for(var key in this.score_key) {
    if (this.score_key[key].join().includes(value)) {
      return Number(key);
    }
  }
  return null;
};

// actually do stuff now

Scrabble.prototype.score = function(word) {
  var running_score = 0
  if (word.length >= 7) {
    running_score += 50;
  }
  for (var letter of word) {
    running_score += this.getKey(letter);
  }
  return running_score;
}

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  // var word_scores = [];
  // for (word of arrayOfWords) {
  //   word_scores.push(this.score(word));
  // }
  var thisScrabble = this;
  function assignScores() {
    thisScrabble.wordsAndScores = {};
    for (var word of arrayOfWords) {
      thisScrabble.wordsAndScores[word] = thisScrabble.score(word);
    }
  }

  function findMax() {
    assignScores();
    // console.log(thisScrabble.assignScores)
    var scores = [];
    for (var prop in thisScrabble.wordsAndScores) {
      // if (wordsAndScores[prop] >= max)
      // console.log(prop)
      scores.push(thisScrabble.wordsAndScores[prop]);
    }
    function compareNumbers(a,b) {
      return a - b;
    }
    var sortedScores = scores.slice(0).sort(compareNumbers);

    // ties?
    var max = sortedScores[sortedScores.length - 1];
    var number_of_ties = numberOfTies(sortedScores, max);

    return resolveTies(scores, max, number_of_ties);
  }

  function numberOfTies(scores, max) {
    var ties = [];
    for (var i = 0; i < scores.length; i++) {
      if (scores[i] === max) { // tie
        ties.push(scores[i]);
      }
    }
    // console.log("number of ties " + ties.length, ties);
    return ties.length;
  }

  function resolveTies(scores, max, amount) {
    var tiedWordsIndices = [];
    var currentIndex = 0;
    for (var val of scores) {
      if (val === max) {
        tiedWordsIndices.push(scores.indexOf(val, currentIndex));
      }
      currentIndex = scores.indexOf(val);
    }
    // console.log("tied " + tiedWordsIndices);

    var tiedWords = [];
    for (index of tiedWordsIndices) {
      tiedWords.push(arrayOfWords[index]);
    }
    // console.log("tied words " + tiedWords)
    // best word to choose is 7 letters long or smallest length
    var bestWord = tiedWords[0];
    for (var word of tiedWords) {
      if (word.length >= 7) {
        bestWord = word;
      } else if (word.length <= bestWord.length) {
        bestWord = word;
      }
    }
    return bestWord;
  }

  return findMax();
  // var max_index = arrayOfWords.indexOf(max); // this could return the index of the wrong tied word
  // you can start searching through and array at a specified index withindexOf
  // we should find the first instance, then keep look thru starting at the index after the first find, instead of having to change the value of the first one for it to ignored or w/e
  // return arrayOfWords[max_index]; // this could easily return the wrong tied word
}

// var scrabble = new Scrabble();
//
// scrabble.score("coffee")















module.exports = Scrabble;
