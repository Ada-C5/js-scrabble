var Player = function(name) {
	this.name = name;
	this.plays = [];
}

Player.prototype.helloWorld = function() {
  return 'hello world!';
};

// Player.prototype.plays = function() {
//   var plays = array;
//   return plays;
// };

Player.prototype.play = function(word) {
	if (this.hasWon() == true) {
		return false
	}
	this.plays.push(word);
	return this.plays;
};

Player.prototype.hasWon = function() {

}

Player.prototype.total_score = function() {
	var Scrabble = require('./scrabble.js');
	var scrabble = new Scrabble;
	var score = 0;
	for (var word of this.plays) {
		score += scrabble.score(word)
	};
	return score;
}



module.exports = Player;