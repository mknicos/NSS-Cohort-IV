/* jshint unused:false*/
/*global Stock:false*/

var Portfolio = (function(){

  'use strict';

  function Portfolio(name){
    this.name = name;
    this._stocks = [];
  }
  
  Object.defineProperty(Portfolio.prototype, 'stockCount', {
    // define read only getter function ie instance.stockCount
    get: function(){return this._stocks.length;}
  });
  
  Portfolio.prototype.addStock = function(stocks){
    this._stocks = this._stocks.concat(stocks);
    //this._stocks.push(stocks);
    //this._stocks = _.flatten(this._stocks);
    /*
    var that = this;
    if(stocks instanceof Stock){
      this._stocks.push(stocks);
    }else{
      stocks.forEach(function(stock){
        that._stocks.push(stock);
      });
    }*/
  };

  Portfolio.prototype.getStock = function(stockNames){
    debugger;
    var tempStocks = [];
    tempStocks.push(stockNames);
    tempStocks = _.flatten(tempStocks);
    var that = this;
    var matches = [];
    var match;
    _.forEach(tempStocks, function(stockName){
      debugger;
      var  match  = _.where(that._stocks, {'symbol': stockName });
      matches.push(match);
    });
    matches = _.flatten(matches);
    if(matches.length < 2){
      return matches[0];
    }else{
      return matches;
    }
  };

  return  Portfolio;
})();

