var assert = require('assert');
var Record = require('../record');

describe( "Record", function() {

  var abbeyRoad = null;

  beforeEach( function() {
    abbeyRoad = new Record( "Abbey Road", "The Beatles", 15.99 );
  });

  it( "Should have name passed in constructor", function() {
    assert.equal( "Abbey Road", abbeyRoad.name );
  });

  it( "Should have artist passed in constructor", function() {
    assert.equal( "The Beatles", abbeyRoad.artist );
  });

  it( "Should have price passed in constructor", function() {
    assert.equal( "15.99", abbeyRoad.price );
  });

  it( "Should have description() returning 'album_name by artist: £price'", function() {
    assert.equal( "Abbey Road by The Beatles: £15.99", abbeyRoad.description() );
  });
});
