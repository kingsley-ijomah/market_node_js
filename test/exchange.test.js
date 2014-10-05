//stop yourself from being lazy!
'use strict';

var assert = require('assert')
  , should = require('should');

var exchangeData = {};

suite('exchange', function() {
  test('buy should add a BUY market order', function(done) {
    exchangeData = exchange.buy(40, 100, exchangeData);
    exchangeData.buys.volumes[40].should.eql(100);
    done();
  });

  test('sell should add a SELL market order', function(done) {
    exchangeData = exchange.sell(41, 200, exchangeData);
    exchangeData.sells.volumes[41].should.eql(200);
    done();
  });

  test('sell should produce trades', function(done) {
    exchangeData = exchange.sell(40, 75, exchangeData);
    exchangeData.trades[0].price.should.eql(40);
    exchangeData.trades[0].volume.should.eql(75);
    exchangeData.volumes[40].volume.should.eql(25);
    exchangeData.volumes[41].volume.should.eql(200);
    done();
  });
});
