/* global Cart, Product, deepEqual, test, Person, ok:false */

'use strict';

//-------------PRODUCT TESTS-----------//

test('product#new', function(){
  var p1 = new Product('cd', 12);

  ok(p1 instanceof Product, 'p1 is a product');
  deepEqual(p1.name, 'cd', 'p1 has a name of cd');
});

//-------------PERSON TEST-------------//
test('person#new', function(){
  var r1 = new Person('Bob', 500);

  ok(r1 instanceof Person, 'r1 is a product');
  deepEqual(r1.name, 'Bob', 'r1 has a name of Bob');
  deepEqual(r1.cash, 500, 'r1 has $500 in cash');
  ok(r1.cart instanceof Cart, 'r1.cart is an instance of Cart');

});

test('Person#checkOut', function(){
  var r1 = new Person('Bob', 500);

  var p1 = new Product('cd', 12);
  var p2 = new Product('book', 5);
  var p3 = new Product('car', 15000);

  r1.cart.addProduct(p1, 2);
  r1.cart.addProduct(p2, 3);
  var receipt = r1.checkOut();

  ok(r1.cash < 500, 'The person should have less cash');
  deepEqual(r1.cart.total, 0, 'there should be nothing in the cart');
  deepEqual(receipt, 'cd, cd, book, book, book', 'should be a list of items bought');

  r1.cash = 500;
  r1.cart.addProduct(p3);
  r1.checkOut();
  deepEqual(r1.cash, 500, 'Nothing should\'ve happened since r1 had insufficient funds');
});

//---------CART TESTS--------------//

test('cart#addProduct', function(){
  var r1 = new Person('Bob', 500);

  var p1 = new Product('cd', 12);
  var p2 = new Product('book', 5);
  var p3 = new Product('coffee', 25);

  r1.cart.addProduct(p1);
  r1.cart.addProduct(p2);
  r1.cart.addProduct(p3, 2);
  ok(r1.cart.products[0] instanceof Product, 'The first item in the cart is a product');
  deepEqual(r1.cart.products.length, 4, 'the cart should have 3 products in it');
});


test('cart#removeProduct', function(){
  var r1 = new Person('Bob', 500);

  var p1 = new Product('cd', 12);
  var p2 = new Product('book', 5);
  var p3 = new Product('coffee', 25);

  r1.cart.addProduct(p1);
  r1.cart.addProduct(p2);
  r1.cart.addProduct(p3, 2);

  r1.cart.removeProduct(p1);
  deepEqual(r1.cart.products.length, 3, 'the cart should have 3 products in it');
  r1.cart.removeProduct(p3, 2);
  deepEqual(r1.cart.products.length, 1, 'the cart should have 1 products in it');
});

test('cart#total', function(){
  var r1 = new Person('Bob', 500);

  var p1 = new Product('cd', 12);
  var p2 = new Product('book', 5);
  var p3 = new Product('coffee', 25);

  r1.cart.addProduct(p1);
  r1.cart.addProduct(p2);
  r1.cart.addProduct(p3, 2);


  deepEqual(r1.cart.total, 67 , 'the cart should have a total of 67');
});
