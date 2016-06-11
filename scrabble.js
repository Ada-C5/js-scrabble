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
  for (var letter of word) {
    running_score += this.getKey(letter);
  }
  return running_score;
}

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var word_scores = [];
  for (word of arrayOfWords) {
    word_scores.push(this.score(word));
  }
  var max = Math.max.apply(Math, word_scores);
  max_index = word_scores.indexOf(max);
  return arrayOfWords[max_index];
}


// var scrabble = new Scrabble();

// scrabble.score("coffee")















module.exports = Scrabble;
