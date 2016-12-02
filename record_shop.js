var RecordShop = function( name ) {

  this.name = name;
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
