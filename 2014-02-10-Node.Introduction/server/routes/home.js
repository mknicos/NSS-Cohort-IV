'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};


exports.name = function(req, res){
  res.jsonp({name: 'my name is node'});
};

exports.favcolor = function(req, res){
  res.jsonp({color: 'blue'});
};

exports.sum = function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum: total});
};
