
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

  // Player.prototype.wordsAndMatchingScores = function(){
  //   var totalScoreHash = {};
  //   var scrabble = new Scrabble();
  //
  //   for(var word in this.plays){
  //     totalScoreHash[word] = scrabble.score(word);
  //   };
  //   return totalScoreHash
  // };


  // Player.prototype.totalScore = function(){
  //   var totalScore = 0;
  //   for(key in this.wordsAndMatchingScores){
  //     totalScore += wordsAndMatchingScores[key];
  //   }
  //   return totalScore;
  // }

  // Player.prototype.totalScore = function(){
  //   var totalScore = 0;
  //   var scrabble = new Scrabble();
  //
  //   for(word in this.plays){
  //     totalScore += scrabble.score(word);
  //   }
  //   return totalScore;
  // }

  // Player.prototype.highestScore = function(){
  //   // var highestScore = [];
  //   // highestScore = wordsAndMatchingScores.max_by {word, score}
  //   // return highestScore
  // };
  //
  // Player.prototype.highestScoringWord = function(){
  //   return this.highestScore[0];
  // };
  //
  // Player.prototype.highestWordScore = function(){
  //   return this.highestScore[1];
  // };

// class Scrabble::Player
//   include Scrabble
//   MAX_TILES_ON_TRAY = 7
//   attr_reader :name
//
//   def initialize(player_info)
//     @name = player_info[:name]
//     @plays = []
//     @tiles = [] # these are the tiles that the player has on their little tray
//     @tilebag = Scrabble::TileBag.new
//     draw_tiles(@tilebag)
//   end

  // # thought about putting this in attr_accessor, but that would let the player edit it in IRB???
  // def plays
  //   @plays
  // end

  // def play(word)
  //   @plays << word
  //   score = Scrabble::Scoring.score(word)
  //   hasWon? == true ? false : score
  //   #return false if the player has already hasWon
  //
  // end

  // def words_and_matching_scores
  //   total_score_hash = {}
  //
  //   plays.each do |word|
  //     total_score_hash[word] = Scrabble::Scoring.score(word)
  //   end
  //   total_score_hash
  // end

  // def total_score
  //   # gets value from the scores_for_each_word method
  //   words_and_matching_scores.values.reduce(:+)
  // end

  // def hasWon?
  //   total_score >= 100 ? true : false
  // end

  // def highest_scoring_word
  //   highest_score[0]
  // end

  // def highest_score
  //   high_score = words_and_matching_scores.max_by do |word, score|
  //     score
  //   end
  //   high_score
  // end

  // def highest_word_score
  //   highest_score[1]
  // end

//   # thought about putting this in attr_accessor, but that would let the player edit it in IRB???
//   def tiles
//     @tiles
//   end
//
//   def draw_tiles(tile_bag)
//     num = MAX_TILES_ON_TRAY - tiles.length
//     @tiles = tile_bag.draw_tiles(num)
//   end
//
// end



module.exports = Scrabble;
