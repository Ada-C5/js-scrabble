var TileBag = require("../tilebag.js");

describe('TileBag', function() {
  var tilebag = new TileBag();

  it('#drawtiles should not be undefined or null', function() {
    expect(tilebag.drawtiles("ada")).not.toBeUndefined();
    expect(tilebag.drawtiles("seattle")).not.toBeNull();
  });

  it('#drawtiles should modify the values of the tiles object', function() {
    expect(tilebag.tiles.A).toEqual(1);
    expect(tilebag.tiles.D).toEqual(1);
    expect(tilebag.tiles.S).toEqual(0);
    expect(tilebag.tiles.E).toEqual(8);
    expect(tilebag.tiles.T).toEqual(4);
    expect(tilebag.tiles.L).toEqual(0);
    expect(tilebag.tiles.D).toEqual(1);
    expect(tilebag.tiles.V).toEqual(1);
  });

});
