/* exported Cart*/

var Cart = (function(){

  'use strict';

  function Cart(){
    this.products = [];
  }

  Cart.prototype.addProduct = function(product, quantity){
    //if quantity argument is not existent, it is assumed to be 1
    var numProducts = quantity || 1;
    for(var i = 0; i < numProducts; i++){
      this.products.push(product);
    }
  };

  Cart.prototype.removeProduct = function(product, quantity){
    //if quantity argument is not existent, it is assumed to be 1
    var that = this;
    var numProducts = quantity || 1;
    for(var i = 0; i < numProducts; i++){
      var index = _.indexOf(that.products, product);
      that.products.splice(index, 1);
    }
  };

  Object.defineProperty(Cart.prototype, 'total',{
    //this is a getter which will total the prices of all the products in the cart
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
