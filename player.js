var Player = function(name){
  this._name = name;
  this._plays = [];
};

Player.prototype.play = function(word){
  this._plays.push(word);
};

Player.prototype.total_score = function(){
  var scrabble = new Scrabble,
      words_played = this._name,
      total = 0;

  for(var word of words_played){
    total += Number(scrabble.score(word));
  }
  return total;
};

Player.prototype.hasWon = function(){
  var total = this.total_score(),
      state = false;

  if(total > 100){
    state = true;
  };
  return state;
}

Player.prototype.highestScoringWord = function(){
  var scrabble = new Scrabble;

  return scrabble.highestScoreFrom(this._plays);
};

Player.prototype.highestWordScore = function(){
  var scrabble = new Scrabble;

  return scrabble.score(this.highestScoringWord);
};