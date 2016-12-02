var RecordShop = function() {

  this.records = [];
};

RecordShop.prototype = {
  stockLevel: function() {
    return this.records.length;
  }
};

module.exports = RecordShop;
