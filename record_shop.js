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
  }
};

module.exports = RecordShop;
