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

  Client.prototype.purchaseStock = function(symbol, shares, innerCallback){
    var that = this;
    var stock, total;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(quote){
      total = quote.LastPrice * shares;

      if (that.cash - total >= 0){
        stock = new Stock(symbol, shares, quote.LastPrice);
        that.cash -= total;
      }

      innerCallback(stock);
    });
  };

  Client.prototype.sellStock = function(stock, amount, callBack){
    debugger;
    var quote;
    var that = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+stock.symbol +'&callback=?';
    $.getJSON(url, quote);
    callBack(stock);

    quote = function (stock, amount){
      debugger;
      if(amount <= stock.shares){
        var total = quote.LastPrice * amount;
        that.cash += total;
        stock.shares -= amount;
      }
    };
  };

  //// Private ////
  function findPortfolio(name, portfolios){
    return _.find(portfolios, function(portfolio){
      return name === portfolio.name;
    });
  }

  return  Client;
})();


