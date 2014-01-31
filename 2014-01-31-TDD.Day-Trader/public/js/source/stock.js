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

  return Stock;
})();
