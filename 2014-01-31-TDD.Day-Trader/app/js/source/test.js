/* global ok, deepEqual, test, Stock: false */

'use strict';

test('Stock#new', function() {
  var s1 = new Stock('AAPL', 50, 25)  ;
  s1.symbol = 'NULL';
  s1.shares = 'NULL';
  s1.purchaseAmount = 'NULL';
  
  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.getSymbol(), 'AAPL', 's1 should have a of AAPL');
  deepEqual(s1.getShares(), 50, 's1 should have 50 shares');
  deepEqual(s1.getPurchaseAmount(), 25, 's1 should a purchased at $25');
});

test('Stock#currentPrice', function() {
  var s1 = new Stock('AAPL', 50, 25)  ;
  
  ok(s1.currentPrice() > 0, 's1 should be above 0');
});
