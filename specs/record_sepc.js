var assert = require('assert');

describe( "Record", function() {

  var abbeyRoad = null;

  beforeEach( function() {

    abbeyRoad = new Record( "Abbey Road" );
  });

  it( "Should have name passed in constructor", function() {

    assert.equal( "Abbey Road", abbeyRoad.name );
  });
});
