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
	this.plays.push(word);
	return this.plays
};

module.exports = Player;