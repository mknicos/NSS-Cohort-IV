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

exports.drink = function(req, res){
  var age = req.params.age;
  var name = req.params.name;
  var string ='';
  if(age < 18){
    string = name + ' can not drink';
  }else if(age > 17 && age < 21){
    string = name + ' might be able to drink';
  }else{
    string = name + ' can drink';
  }
  res.jsonp({response: string});
};
