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

  it("can assign player a name"), function() {
    player.name = "hotpants";
    expect(player.name).toEqual('hotpants');
  }

  it ('can make a new player and give them a name'), function() {
    var named_player = new Player("fancy pants");
    expect(named_player.name).toEqual('fancy pants');
  }

  it('starts player off with empty array of played words'), function() {
    expect(player.plays).toEqual([]);
  }

  it('can let a player play a word and add it to their plays array'), function() {
    player.play('taco');
    expect(player.plays).toEqual(["taco"]);
  }

  it('knows if a player has won - returns true if so'), function() {
    player.play('zzzzzzzzzzzz');
    expect(player.hasWon()).toEqual(true);
  }

  it('returns false if player tries to play word and has already won'), function() {
    var new_player = new Player();
    new_player.play("zzzzzzzzzzzz");
    expect(new_player.play('tom')).toEqual(false);
  }

  it('returns total score of player'), function() {
    expect(tim.total_score).toEqual(22);
  }

  it('returns highest scoring word player has used'), function() {
    expect(tim.highestScoringWord()).toEqual("zz");
}

  it('returns score of highest scoring word'), function() {
    expect(tim.highestWordScore()).toEqual(20);
  }


  });
