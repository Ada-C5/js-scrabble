// jasmine matchers
// to(N­ot)­Be( null | true | false )
// to(N­ot)­Equ­al( value )
// to(N­ot)­Mat­ch( regex | string )
// toBe­Def­ine­d()
// toBe­Und­efi­ned()
// toBe­Nul­l()
// toBe­Tru­thy()
// toBe­Fal­sy()
// to(N­ot)­Con­tain( string )
// toBe­Les­sTh­an( number )
// toBe­Gre­ate­rTh­an( number )
// toBe­NaN()
// toBe­Clo­seTo( number, precision )
// toTh­row()


// Create a new Player object with a minimum of 11 test. The object should have the following functions:
//
// Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player
// play(word): Function which will adds the input word to the plays Array
// Returns false if player has already won
// total_score(): Function which sums up and returns the score of the players words
// hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
// highestScoringWord(): Function which returns the highest scoring word the user has played.
// highestWordScore(): Function which returns the highestScoringWord score.


var Player = require("../player.js");

var player = new Player("Sandy");
var word = "cat";
var array = ["cat", "lemon", "pickle", "aaaaaaaaacc"];

describe('Player', function() {
  it('can create a new player instance', function() {
    expect(Player.new("Sandy")).toEqual(player);
  });

  it('has properties name, plays', function() {
    expect(player.name).toEqual("Sandy");
    expect(player.plays).toEqual(array);
  });
});

describe('Player', function() {
  it('can play a word'), function() {
    expect(player.play("salt")).toEqual(["cat", "lemon", "pickle", "aaaaaaaaacc", "salt"]);
  };
});

describe('Player', function() {
  it("can return a player instance's total score"), function() {
    expect(player.total_score()).toBe(91);
  };
});

describe('Player', function() {
  it('can tell if a player has won'), function() {
    expect(player.hasWon()).toBe(false);
  };

  it('does not return true if the player has less than 100 pts'), function() {
    expect(player.hasWon()).toNotBe(true);
  };
});

describe('Player', function() {
  it('returns the highest scoring word the user has played'), function() {
    expect(player.highestScoringWord()).toBe("aaaaaaaaacc");
  };

  it('does not return null'), function() {
    expect(player.highestScoringWord()).toNotBe(null);
  }

  it('returns a word, not a number'), function() {
    expect(player.highestScoringWord()).toNotBe(65);
  };
});

describe('Player', function() {
  it('returns the highest score the user has played'), function() {
    expect(player.highestWordScore()).toBe(65);
  };

  it('returns a number'), function() {
    expect(player.highestWordScore()).toNotBe("aaaaaaaaacc");
  };
});
