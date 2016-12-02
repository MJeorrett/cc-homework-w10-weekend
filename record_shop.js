var RecordShop = function( name, city, initialCashInHand ) {

  this.name = name;
  this.city = city;

  this.cashInHand = initialCashInHand === undefined ? 0 : initialCashInHand;

  this.records = [];
};

RecordShop.prototype = {

  stockLevel: function() {
    return this.records.length;
  },

  addStock: function( record ) {
    this.records.push( record );
  },

  addCash: function( amount ) {
    this.cashInHand += amount;
  }
};

module.exports = RecordShop;
