var Record = function( name, artist, price ) {

  this.name = name;
  this.artist = artist;
  this.price = price;
};

Record.prototype = {
  description: function() {
    return this.name + " by " + this.artist + ": £" + this.price.toFixed( 2 ).toString();
  }
};

module.exports = Record;
