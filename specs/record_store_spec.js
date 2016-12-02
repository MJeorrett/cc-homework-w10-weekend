var assert = require('assert');

describe( "Record Store", function() {

    var abbeyRoad = null;
    var batOutOfHell = null;
    var tooDarkPark = null;
    var slipperyWhenWet = null;
    var parklife = null;

    beforeEach( function() {
      
      abbeyRoad = new Record( "Abbey Road", "The Beatles", 15.99 );
      batOutOfHell = new Record( "Bat Out of Hell", "Meatloaf", 12.99 );
      tooDarkPark = new Record( "Too Dark Park", "Skinny Puppy", 13.50 );
      slipperyWhenWet = new Record( "Slippery When Wet", "Bon Jovi", 12.99 );
      parklife = new Record( "Parklife", "Blur", 10.00 );
    });
});