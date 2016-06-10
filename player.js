var Player = function(name) {
	this.name = name;
	this.plays = [];
}

Player.prototype.helloWorld = function() {
  return 'hello world!';
};

Player.prototype.play = function(word) {
	if (this.hasWon() == true) {
		return false
	}
	this.plays.push(word);
	return this.plays;
};

Player.prototype.total_score = function() {
	var Scrabble = require('./scrabble.js');
	var scrabble = new Scrabble;
	var score = 0;
	for (var word of this.plays) {
		score += scrabble.score(word)
	};
	return score;
}

Player.prototype.hasWon = function() {
	// console.log(this.total_score);
	if (this.total_score > 100) {
		return true;
	} else {
		return false;
	}
}

Player.prototype.highestScoringWord = function() {
	var Scrabble = require('./scrabble.js');
	var scrabble = new Scrabble;
	return scrabble.highestScoreFrom(this.plays);
}

Player.prototype.highestWordScore = function() {
	var Scrabble = require('./scrabble.js');
	var scrabble = new Scrabble;
	var word = scrabble.highestScoreFrom(this.plays);
	return scrabble.score(word);
}



module.exports = Player;