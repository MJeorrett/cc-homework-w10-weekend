var assert = require('assert');
var Record = require('../record');

describe( "Record", function() {

  var abbeyRoad = null;

  beforeEach( function() {
    abbeyRoad = new Record( "Abbey Road" );
  });

  it( "Should have name passed in constructor", function() {
    assert.equal( "Abbey Road", abbeyRoad.name );
  });

  it( "Should have artist passed in constructor", function() {
    assert.equal( "The Beatles", abbeyRoad.artist );
  });
});
