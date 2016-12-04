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
  },

  indexOfRecord: function( record ) {
    return this.records.indexOf( record );
  },

  hasRecord: function( record ) {
    return this.indexOfRecord( record ) != -1;
  },

  sell: function( record ) {
    var recordIndex = this.indexOfRecord( record );
    if ( recordIndex != -1 ) {

      this.records.splice( recordIndex, 1 );
      this.cashInHand += record.price;
    }
  },

  costOfStock: function() {
    return this.records.reduce( function( total, record ) {
      return total + record.price;
    }, 0 );
  },

  financialReport: function() {
    var result = "Financial report for " + this.name + ", " + this.city + ":";
    result += "\ncash in hand: £" + this.cashInHand.toFixed( 2 );
    result += "\nheld stock: £" + this.costOfStock().toFixed( 2 );
    result += "\ngross profit: £" + (this.cashInHand - this.costOfStock()).toFixed( 2 );

    return result;
  }
};

module.exports = RecordShop;
