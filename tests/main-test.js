var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var SnipRate = require('../snipRate');

describe('USD to UAH rate', function() {
  it('getUsdRate() should return 27.1052', function() {
    var snipRate = new SnipRate();
    expect(snipRate.getUsdRate()).to.equal(27.1052);
  });
});