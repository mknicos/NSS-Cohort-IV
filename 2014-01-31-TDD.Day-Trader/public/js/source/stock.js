/* jshint unused:false */

var Stock = (function(){

  'use strict';

  var symbol;
  var shares = 0;
  var purchaseAmount = 0;

  function Stock(iSymbol, iShares, iPurchaseAmount){
    symbol = iSymbol;
    shares = iShares;
    purchaseAmount = iPurchaseAmount;
  }

  Stock.prototype.getSymbol = function(){
    return symbol;
  };

  Stock.prototype.getShares = function(){
    return shares;
  };
  
  Stock.prototype.getPurchaseAmount = function(){
    return purchaseAmount;
  };

  Stock.prototype.getQuote = function(fn){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, fn);
  };

  Stock.prototype.value = function(fn){
    this.getQuote(function(quote){
      var total = quote.LastPrice * shares;
      fn(total);
    });
  };

  return Stock;
})();
