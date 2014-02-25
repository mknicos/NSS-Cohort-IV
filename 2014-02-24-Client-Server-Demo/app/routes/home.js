'use strict';

var _ = require('../static/js/vendor/lodash');

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Template'});
};

exports.calc = function(req, res){
  res.render('home/calc', {title: 'Calculator'});
};

exports.add = function(req, res){
  var a = 1 * req.query.a;
  var b = 1 * req.query.b;
  var answer = a + b;
  res.send({answer: answer});
};

exports.multiply = function(req, res){
  console.log(req.query);
  var numbers = req.query.numbers.split(',');
  var product = _.reduce(numbers, function (prod, num){
    return prod * num;
  },1);
  res.send({answer:product});
};
