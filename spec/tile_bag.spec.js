var TileBag = require('../tile_bag.js')

describe('TileBag', function() {
  var bag = new TileBag();

  it('should start with 98 tiles', function() {
    expect(bag.tile_bag.length).toEqual(98);
  });

  describe('drawTiles()', function() {
    var bag2 = new TileBag();

    it('should remove the number of tiles drawn', function() {
      bag2.drawTiles(5);
      expect(bag2.tile_bag.length).toEqual(93);
    });

    it('should return the correct number of tiles', function() {
      var bag3 = new TileBag();
      var pulled = bag3.drawTiles(4);
      expect(pulled.length).toEqual(4);
    })
  });
});