Scrabble = require('./scrabble.js');


function Player(name){
this.name = name;
this.plays = [];
this.total_score = 0;
this.already_wone = false;
this.tiles = [];
}

Player.prototype.play = function(word){
  if(this.already_won === false){
    return true;
  }

  this.plays.push(word);
  var score = Scrabble.getPrototypeOfscore(word);
  this.total_score += score;
  return score;

};

Player.prototype.won = function(){
  if(this.total_score > 100){
    concole.log("You win");
    this.already_won = true;
  }else {
    return false;
  }
};

Player.prototype.highest_scoring_word = function(){
    return Scrabble.highestScoreFrom(this.plays);

};

Player.prototype.highest_word_score = function(){
  highest_word = Scrabble.highest_score_from(this.plays);
    return Scrabble.score(highest_word);

};


Player.prototype.draw_tiles = function(tile_bag){
  this.tiles.push(tile_bag.draw_tiles(7 - this.tiles.length));
  return this.tiles;
};



module.exports = Player;

var player = new Player();
console.log(player.play("yes"));


// anoymons function
