/* global ok, deepEqual, test, throws, asyncTest, start, start, Portfolio, start, Stock: false */

'use strict';

test('Stock#new', function(){
  var s1 = new Stock('AAPL', 50, 25);
  
  throws(function(){
    s1.symbol = 'xyz';
  },'should not be able to set symbol on s1');

  throws(function(){
    s1.shares = 40;
  },'should not be able to set shares on s1');

  throws(function(){
    s1.purchaseAmount = 15;
  },'should not be able to set purchaseAmount on s1');

  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.symbol, 'AAPL', 's1 should be apple');
  deepEqual(s1.shares, 50, 's1 should have 50 shares');
  deepEqual(s1.purchaseAmount, 25, 's1 should be purchased at $25');
});

/*
  asyncTest('Stock#currentPrice', function() {
  var s1 = new Stock('AAPL', 50, 25)  ;
  s1.getQuote(function(quote){
    ok(quote.LastPrice > 0, 'AAPL quote should be greater than 0');
    start();
  });
});
*/

asyncTest('Stock#value', function() {
  var s1 = new Stock('AAPL', 50, 25)  ;
  s1.value(function(val){
    ok(val > 0, 'AAPL total value should be greater than 0');
    start();
  });
});

test('Portfolio#new', function() {
  var p1 = new Portfolio('Tech Stocks');

  ok(p1 instanceof Portfolio, 'p1 is an instance of Portfolio');
  deepEqual(p1.name,'Tech Stocks', 'p1 should have a name');
  deepEqual(p1.stockCount, 0, 'p1 should not have any stocks');
});

test('Portfolio#addStock', function() {
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 250, 35);
  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);
   
  deepEqual(p1.stockCount, 4, 'p1 should have four stocks in it');
});

test('Portfolio#getStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 250, 35);
  p1.addStock(s1);
  p1.addStock(s2);
  p2.addStock([s3, s4]);
  var s5 = p1.getStock('AAPL');
  var stocks = p2.getStock(['GOOG', 'MSFT']);
  
  ok(s5.symbol === 'AAPL', 's5 is APPL');
  ok(stocks[0].symbol === 'GOOG', 'the first stock in stocks is AMZN');
  ok(stocks[1].symbol === 'MSFT', 'the second stock in stocks is GOOG');
  deepEqual(stocks.length, 2, 'stocks contains 2 stocks');
});

/*
  test('Portfolio#removeStock', function() {
  var p1 = new portfolioFactory('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 40, 30);
  var s3 = new Stock('LUV', 60, 40);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock(s3);

  var s4 = p1.removeStock('AAPL');

  deepEqual(s4.getSymbol(), 'AAPL', 'the deleted stock should be AAPL');
  deepEqual(p1.stockCount(), 2, 'p1 should have two stocks');
});
*/
