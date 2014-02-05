/* exported Client */
/* global Stock */

var Client = (function(){

  'use strict';

  function Client(name, cash){
    this.name = name;
    this.cash = cash;
    this._portfolios = [];
  }
  Object.defineProperty(Client.prototype, 'portfolioCount', {
    // define read only getter function ie instance.portfolioCount
    get: function(){return this._portfolios.length;}
  });

  Client.prototype.addPortfolio = function(portfolios){
    this._portfolios = this._portfolios.concat(portfolios);
  };

  Client.prototype.getPortfolios = function(portfolioNames){
    var output;
    if (typeof portfolioNames === 'string'){
      output = findPortfolio(portfolioNames, this._portfolios);
    }else{
      output = _.map(portfolioNames, function(portfolioName){
        return findPortfolio(portfolioName, this._portfolios);
      }, this);
    }
    return output;
  };
/*
  Portfolio.prototype.delStock = function(stockSymbols){
    var stocks = [].concat(stockSymbols);
    
    var output = _.remove(this._stocks, function(stock){
      return _.contains(stocks, stock.symbol);

    });
    if(typeof stockSymbols === 'string'){
      output = output[0];
    }
    return output;
  };
*/
  Client.prototype.delPortfolio = function(input){
    var names = [].concat(input);

    var output = _.remove(this._portfolios, function(portfolio){
      return _.contains(names, portfolio.name);
    });

    if(typeof input === 'string'){ output = output[0]; }

    return output;
  };

  Client.prototype.purchaseStock = function(symbol, shares, callback){
    var stock, total;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(quote){
      total = quote.LastPrice * shares;
      stock = new Stock(symbol, shares, quote.LastPrice);
      callback(stock);
    });
  };

  //// Private ////
  function findPortfolio(name, portfolios){
    return _.find(portfolios, function(portfolio){
      return name === portfolio.name;
    });
  }

  return  Client;
})();


