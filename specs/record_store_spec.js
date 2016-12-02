var assert = require('assert');
var RecordShop = require('../record_shop');
var Record = require('../record');

describe( "Record Store", function() {

    var emptyRecordShop = null;
    var abbeyRoad = null;
    var batOutOfHell = null;
    var tooDarkPark = null;
    var slipperyWhenWet = null;
    var parklife = null;

    beforeEach( function() {

      emptyRecordShop = new RecordShop( "Empty Records", "Inverness" );

      populatedRecordShop = new RecordShop( "HMV", "Berlin", 12345 );

      abbeyRoad = new Record( "Abbey Road", "The Beatles", 15.99 );
      batOutOfHell = new Record( "Bat Out of Hell", "Meatloaf", 12.99 );
      tooDarkPark = new Record( "Too Dark Park", "Skinny Puppy", 13.50 );
      slipperyWhenWet = new Record( "Slippery When Wet", "Bon Jovi", 12.99 );
      parklife = new Record( "Parklife", "Blur", 10.00 );
    });

    it( "Should have name passed in constructor", function() {
      assert.equal( "Empty Records", emptyRecordShop.name );
    });

    it( "Should have city passed in constructor", function() {
      assert.equal( "Inverness", emptyRecordShop.city );
    });

    it( "Should have cashInHand passed in constructor", function() {
      assert.equal( 12345, populatedRecordShop.cashInHand );
    });

    it( "Should have cashInHand() = 0 if none passed in constructor", function() {
      assert.equal( 0, emptyRecordShop.cashInHand );
    });

    it( "Should increase cashInHand by amount passed to addCash()", function() {
      emptyRecordShop.addCash( 13 );
      assert.equal( 13, emptyRecordShop.cashInHand );
    });

    it( "Should start with no records", function() {
      assert.equal( 0, emptyRecordShop.records.length );
    });

    it( "Should start with stockLevel() = 0", function() {
      assert.equal( 0, emptyRecordShop.stockLevel() );
    });

    it( "Should increase stockLevel() when record is added to stockLevel", function() {
      emptyRecordShop.addStock( abbeyRoad );
      assert.equal( 1, emptyRecordShop.stockLevel() );
    });
});
