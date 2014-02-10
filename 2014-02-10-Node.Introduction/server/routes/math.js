'use strict';
var _ = require('lodash');

exports.product = function(req, res){
  console.log('i am a product');
  console.log(req.query.numbers);
  var numbers = req.query.numbers.split(',');
  var answer = _.reduce(numbers, function(acc, num)
      {return acc * num;}, 1);

  res.jsonp({product:answer});
};
