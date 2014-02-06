/* exported Cart*/

var Cart = (function(){

  'use strict';

  function Cart(){
    this.products = [];
  }
  
  Cart.prototype.addProduct = function(product, quantity){
    var numProducts = quantity || 1;
    for(var i = 0; i < numProducts; i++){
      this.products.push(product);
    }
  };

  Cart.prototype.removeProduct = function(product, quantity){
    var that = this;
    var numProducts = quantity || 1;
    for(var i = 0; i < numProducts; i++){
      var index = _.indexOf(that.products, product);
      that.products.splice(index, 1);
    }
  };

  Object.defineProperty(Cart.prototype, 'total',{
    get: function(){
      var total = 0;
      var prices = _.map(this.products, 'price');
      prices.forEach(function(product){
        total += product;
      });
      return total;
    }
  });
  return Cart;
})();
