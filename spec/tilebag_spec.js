var TileBag = require("../tilebag.js");

describe('TileBag', function() {
  var tilebag = new TileBag();

  it('#drawtiles should not be undefined or null', function() {
    expect(tilebag.drawtiles("ada")).not.toBeUndefined();
    expect(tilebag.drawtiles("seattle")).not.toBeNull();
  });

  it('#drawtiles should modify the values of the tiles object', function() {
    expect(tilebag.tiles.A).toEqual(6);
    expect(tilebag.tiles.D).toEqual(3);
    expect(tilebag.tiles.S).toEqual(3);
    expect(tilebag.tiles.E).toEqual(10);
    expect(tilebag.tiles.T).toEqual(4);
    expect(tilebag.tiles.L).toEqual(3);
  });

});
