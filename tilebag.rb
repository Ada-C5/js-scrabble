class TileBag

  STARTING_TILE_SET = {
    "A" => 9,
    "B" => 2,
    "C" => 2,
    "D" => 4,
    "E" => 12,
    "F" => 2,
    "G" => 3,
    "H" => 2,
    "I" => 9,
    "J" => 1,
    "K" => 1,
    "L" => 4,
    "M" => 2,
    "N" => 6,
    "O" => 8,
    "P" => 2,
    "Q" => 1,
    "R" => 6,
    "S" => 4,
    "T" => 6,
    "U" => 4,
    "V" => 2,
    "W" => 2,
    "X" => 1,
    "Y" => 2,
    "Z" => 1,
  }

	def initialize
		# sets up instaces with collections of default tiles
		@tiles_in_bag = STARTING_TILE_SET.to_a # is this valid?
    @tile = []
	end

	def draw_tiles(number_of_tiles = 7)
    tiles_left_array = []
    current_tile_array = @tiles_in_bag
    current_tile_array.each do |letter, value|
      if value > 0                        #makes new array of only letters that have tiles left
        tiles_left_array << [letter, value]
      end
    end
    number_of_tiles.times do |letter, tiles_left|
      @tile = tiles_left_array.sample
    end
    index = @tiles_in_bag.index(@tile)
    @tiles_in_bag[index][1] -= 1
  end




	def self.tiles_remaining
		# returns the number of tiles remaining in the bag
		# every time tiles are drawn, this needs to update
	end
end
