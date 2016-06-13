var TileBag = require('../tile_bag.js')

describe('TileBag', function() {
  var bag;

  beforeEach(function() {
    bag = new TileBag();
  });

  it('should start with 98 tiles', function() {
    expect(bag.tile_bag.length).toEqual(98);
  });

  describe('drawTiles()', function() {
    it('should remove the number of tiles drawn', function() {
      bag.drawTiles(5);
      expect(bag.tile_bag.length).toEqual(93);
    });

    it('should return the correct number of tiles', function() {
      var pulled = bag.drawTiles(4);
      expect(pulled.length).toEqual(4);
    });

    it('should tell the user that there are not enough tiles if appropriate', function() {
      bag.drawTiles(90);
      expect(bag.drawTiles(10)).toEqual("There are only 8 tiles remaining.");
    });
  });
});