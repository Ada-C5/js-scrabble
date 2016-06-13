var Player = require("../player.js");

describe('Player', function(){
  var winner = new Player("Wordsmith"),
      loser = new Player("SilentBob");

  winner.play("jacuzzi");
  winner.play("develop");
  console.log(winner._plays);

  it("is present", function(){
    expect(winner !== undefined).toEqual(true);
  });

  it("has a name", function(){
    expect(winner._name).toEqual('Wordsmith');
  });

  // test plays property
  it("returns array of words played", function(){
    expect(winner._plays).toEqual(["jacuzzi","develop"]);
    expect(loser._plays).toEqual([]);
  });

  // test total_score function



  // test haswon function
  it("returns true if player won", function(){
    expect(winner.hasWon()).toEqual(true);
  });

  it("returns false if player doesn't have 100 points", function(){
    expect(loser.hasWon()).toEqual(false);
  });

  // test highestscoringword function

  // test highestwordscore function

});