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
  },

  inventoryString: function() {
    var result = "Inventory for " + this.name + ", " + this.city + ":"

    for ( var aRecord of this.records ) {

      result += "\n" + aRecord.description();
    }

    return result;
  }
};

module.exports = RecordShop;
