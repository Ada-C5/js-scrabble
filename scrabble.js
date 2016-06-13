var Scrabble = function() {};

// YOUR CODE HERE



Scrabble.prototype.helloWorld = function() { //function on the prototypes
  return 'hello world!';
};


Scrabble.prototype.score = function (word) {
  LETTER_SCORES = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j'],
    10:['q', 'z', 'x'] };

    var word_score = 0;
    if(word.length === 7){
      word_score += 50;
    }

    for(var letter of word){
      for(var key in LETTER_SCORES){
      var letter_scors =  LETTER_SCORES[key];
      for(var val of letter_scors){
        if (letter.includes(val)){
          key = parseInt(key);
          word_score += key;
        }
      }
    }
  }
  var scored_word = parseInt(word_score,10);
  return scored_word;
};

Scrabble.prototype.highestScoreFrom = function (word_array) {
var word_list = [];
var word_hash = {};
  for(var val of word_array){
    word_hash[val] = this.score(val);

  }

 var highest_word = Object.keys(word_hash).sort(function(a,b){

   var score = word_hash[a]-word_hash[b];
   if(score === 0){
     return b.length - a.length;
   }else {
     return score;
   }


   }).reverse();


 seven_word = highest_word.find(function(element){return element.length === 7;});
 if(seven_word === undefined){
   return highest_word[0];
        }
   else{
     return seven_word;
   }
};


module.exports = Scrabble;

var score_word = new Scrabble();
console.log(score_word.score("dkfjaef"));
console.log(score_word.score("cmvsndfs"));
console.log(score_word.score("xxx"));
console.log(score_word.highestScoreFrom(['aaaaaaa','bbbbbbb']));


// //remember call backs
