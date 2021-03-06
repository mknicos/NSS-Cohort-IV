/* global ok, deepEqual, test, throws, asyncTest, stop, start, Portfolio, Client, Stock: false */

'use strict';

//----------------Stock Tests---------------------//

test('Stock#new', function(){
  var s1 = new Stock('AAPL', 50, 25);
  
  throws(function(){
    s1.symbol = 'xyz';
  },'should not be able to set symbol on s1');

  //throws(function(){
    //s1.shares = 40;
  //},'should not be able to set shares on s1');

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

//-----------------------Portfolio-Tests----------------------//

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

test('Portfolio#delStock', function() {
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 250, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock(s3);
  p1.addStock(s4);

  var s5 = p1.delStock('AAPL');

  deepEqual(p1._stocks.length, 3, 'p1 should have 3 stocks left');
  ok(s5.symbol === 'AAPL', 's5 should be AAPL');

  var stocks = p1.delStock(['GOOG', 'MSFT']);

  deepEqual(p1._stocks.length, 1, 'p1 should only have one stock left');
  ok(stocks[0].symbol === 'GOOG', 'the first stock in stocks should be GOOGLE');
  ok(stocks[1].symbol === 'MSFT', 'the second stock in stocks should be MSFT');
});

//------------------------------Client Tests--------------------------//

test('Client#new', function() {
  var c1 = new Client('Client1', 50000);

  ok(c1 instanceof Client, 'c1 is an instance of Client');
  deepEqual(c1.name,'Client1', 'c1 should have a name');
  deepEqual(c1.cash, 50000, 'c1 should have $50000 to start');
  deepEqual(c1.portfolioCount, 0, 'c1 should not have any portfolios');
});

test('Client#addPortfolio', function() {
  var c1 = new Client('Client1');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Non-Tech Stocks');
  var p3 = new Portfolio('Semi-Tech Stocks');
  c1.addPortfolio(p1);
  c1.addPortfolio([p2, p3]);
   
  deepEqual(c1.portfolioCount, 3, 'c1 should have three stocks');
});

test('Client#getPortfolios', function(){
  var c1 = new Client('Client1');
  var c2 = new Client('Client2');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Non-Tech Stocks');
  var p3 = new Portfolio('Semi-Tech Stocks');
  c1.addPortfolio(p1);
  c2.addPortfolio([p2, p3]);
  var p4 = c1.getPortfolios('Tech Stocks');
  var portfolios = c2.getPortfolios(['Non-Tech Stocks', 'Semi-Tech Stocks']);
  
  ok(p4.name === 'Tech Stocks', 'p4 contains Tech Stocks');
  ok(portfolios[0].name === 'Non-Tech Stocks', 'the first portfoilio in portfolios contains Non Tech Stocks');
  ok(portfolios[1].name === 'Semi-Tech Stocks', 'the first portfoilio in portfolios contains Non Tech Stocks');
  deepEqual(portfolios.length, 2, 'portfolios contains 2 portfolios');
});


test('Client#delPortfolio', function() {
  var c1 = new Client('Client1');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Non-Tech Stocks');
  var p3 = new Portfolio('Semi-Tech Stocks');
  var p4 = new Portfolio('Mutual Funds');

  c1.addPortfolio(p1);
  c1.addPortfolio(p2);
  c1.addPortfolio(p3);
  c1.addPortfolio(p4);

  var p5 = c1.delPortfolio('Tech Stocks');

  deepEqual(c1._portfolios.length, 3, 'c1 should have 3 stocks left');
  ok(p5.name === 'Tech Stocks', 'The removed stock should have a name of Tech Stocks');

  var portfolios = c1.delPortfolio(['Non-Tech Stocks', 'Semi-Tech Stocks']);

  deepEqual(c1._portfolios.length, 1, 'c1 should only have one portfolio left');
  ok(portfolios[0].name === 'Non-Tech Stocks', 'the first portfolio should be Non Tech Stocks');
  ok(portfolios[1].name === 'Semi-Tech Stocks', 'the second portfolio should be Semi-Tech Stocks');
});

asyncTest('Client#purchaseStock', function(){
  stop();
  var c1 = new Client('Bob', 50000);
  c1.purchaseStock('GOOG', 20, function(stock){
    ok(stock instanceof Stock, 'stock should be a  Stock object');
    deepEqual(stock.shares, 20, 'should be 100 shares');
    deepEqual(stock.symbol, 'GOOG', 'should be GOOG');
    ok(c1.cash < 50000, 'should have less than $50k');
    start();
  });
  var c2 = new Client('Bob2', 50000);
  c2.purchaseStock('AAP', 25000, function(stock){
    ok(!stock, 'should not be a stock');
    ok(c2.cash === 50000, 'should have 25000');
    start();
  });
});

asyncTest('Client#sellStock', function() {
  var c1 = new Client('Bob', 100000);
  var s1 = new Stock('AAPL', 50, 250);
  c1.sellStock(s1, 10, function(stock){
    ok(stock instanceof Stock, 'stock should be a  Stock object');
    deepEqual(stock.shares, 40, 'should be 40 shares');
    deepEqual(stock.symbol, 'AAPL', 'should be aapl');
    ok(c1.cash > 100000, 'should have more than 50k');
    start();
  });
});

