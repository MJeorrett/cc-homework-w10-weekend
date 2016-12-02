var RecordShop = function( name, city, initialCashInHand ) {

  this.name = name;
  this.city = city;

  if (initialCashInHand != undefined ) {

    this.cashInHand = initialCashInHand;

  } else {

    this.cashInHand = 0;
  }

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
