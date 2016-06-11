var Scrabble = require("../scrabble.js");
var Player = require("../player.js");

describe('Player', function() {
  var scrabble = new Scrabble();
  var player = new Player();
  var tim = new Player();
  tim.play("zz");
  tim.play('aa');

  it('can make a new player', function() {
    expect(player !== undefined).toEqual(true);
  });

  it("can make a player and give them a name"), function() {
    player.name = "hotpants";
    expect(player.name).toEqual('hotpants');
  }

  it('starts player off with empty array of played words'), function() {
    expect(player.played_words).toEqual([]);
  }

  it('can let a player play a word and add it to their played_words array'), function() {
    player.play('taco');
    expect(player.played_words).toEqual(["taco"]);
  }

  it('knows if a player has won - returns true if so'), function() {
    player.play('zzzzzzzzzzzz');
    expect(player.hasWon()).toEqual(true);
  }

  it('returns false if player tries to play word and has already won'), function() {
    var new_player = new Player();
    new_player.play("zzzzzzzzzzzz");
    expect(new_player.play('tom')).toEqual(false)
  }

  it('returns highest scoring word player has used'), function() {
    expect(tim.highestScoringWord()).toEqual("zz");
}

  it('returns score of highest scoring word'), function() {
    expect(tim.highestWordScore()).toEqual(20);
  }


  });
