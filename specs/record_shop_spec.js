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

      populatedRecordShop.addStock( abbeyRoad );
      populatedRecordShop.addStock( batOutOfHell );
      populatedRecordShop.addStock( tooDarkPark );
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

    it( "Should return correct inventory listing from inventoryString", function() {

      emptyRecordShop.addStock( abbeyRoad );
      emptyRecordShop.addStock( batOutOfHell );
      emptyRecordShop.addStock( tooDarkPark );

      var expected = "Inventory for Empty Records, Inverness:";
      expected += "\nAbbey Road by The Beatles: £15.99";
      expected += "\nBat Out of Hell by Meatloaf: £12.99";
      expected += "\nToo Dark Park by Skinny Puppy: £13.50";

      actual = emptyRecordShop.inventoryString();

      assert.equal( expected, actual );
    });

    it( "Should return true from hasRecord() when record is in stock", function() {
      assert.equal( true, populatedRecordShop.hasRecord( abbeyRoad ) );
    });

    it( "Should return false from hasRecord() when record is not in stock", function() {
      assert.equal( false, populatedRecordShop.hasRecord( slipperyWhenWet ) );
    });

    it( "Should increase cashInHand by price of record when selling it", function() {
      populatedRecordShop.sell( abbeyRoad );
      assert.equal( 12345 + 15.99, populatedRecordShop.cashInHand );
    });

    it( "Should remove record from stock when selling it", function() {
      populatedRecordShop.sell( abbeyRoad );
      assert.equal( false, populatedRecordShop.hasRecord( abbeyRoad ) );
    });

    it( "Should not do anything when trying to sell record that is not in stock", function() {
      populatedRecordShop.sell( slipperyWhenWet );
      assert.equal( 3, populatedRecordShop.stockLevel() );
      assert.equal( 12345, populatedRecordShop.cashInHand );
    });
});
