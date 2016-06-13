
  var prompt = require('prompt');

// SCRABBLE
  Scrabble = function() {
    this._points = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10
    };
  };
  Scrabble.prototype.score = function(word){
    var score = 0;
    var tiles = 0;

    var wordArray = word.toUpperCase().split("");

    for(var char of wordArray){
      score += this._points[char];

      tiles += 1;
    };

    if(tiles == 7){
      score += 50;
    };
    return score;
  };

  Scrabble.prototype.highestScoreFrom = function(arrayOfWords){
    // split array
    // ["cats"], ["hello"],
    // var arrayOfWords = words;
    // var  arrayOfWords = [];
    // arrayOfWords = words;
    console.log(typeof arrayOfWords);

    var maxWord = [arrayOfWords[0], this.score(arrayOfWords[0])];
    var currentScore = this.score(arrayOfWords[0]);
    var highestScoreHash = {
                      word: (arrayOfWords[0]),
                      score: currentScore
                    };

    for(var word of arrayOfWords){
      var currentScore = this.score(word)

      if (currentScore === highestScoreHash["score"]){
        if (highestScoreHash["word"].length < 7 && highestScoreHash["word"].length > word.length){
          highestScoreHash = {
                            word: word,
                            score: currentScore
          }
        };
      }else if (currentScore > highestScoreHash["score"]){
        highestScoreHash = {
                          word: word,
                          score: currentScore
        }
      };
    };
    return highestScoreHash["word"];
  };

// PLAYER
  Player = function(name){
    this.name = name;
    this.plays = [];
    this.totalScore = 0;
    this._tiles = [];
    this._maxTiles = 7;
  };



  Player.prototype.play = function(word){
    var scrabble = new Scrabble();
    var score = scrabble.score(word);

    this.plays.push(word);
    this.totalScore += score;

    return this.hasWon() === true ? false : score;
  };

  Player.prototype.hasWon = function (){
    return this.totalScore >= 100 ? true : false;
  };

module.exports = Scrabble;
