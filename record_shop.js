var RecordShop = function( name, city ) {

  this.name = name;
  this.city = city;
  this.records = [];
};

RecordShop.prototype = {
  stockLevel: function() {
    return this.records.length;
  },
  addStock: function( record ) {
    this.records.push( record );
  }
};

module.exports = RecordShop;
