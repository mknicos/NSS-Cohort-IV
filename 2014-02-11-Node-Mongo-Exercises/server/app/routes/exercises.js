'use strict';
var MongoClient = require('mongodb').MongoClient;
var Exercise = require('../models/exercise');
exports.create = function(req, res){
  console.log('POINT 1');

  MongoClient.connect('mongodb://localhost/exercises', function(err, db) {
    if(err){ throw err;}
    console.log('POINT 2');

    var exercise = new Exercise(req.body.name, req.body.time, req.body.calories, req.body.date);

    db.collection('exercises').insert(exercise, function(err, records){
      if(err){ throw err;}
      console.log('POINT 3');
      res.send(records[0]);
    });
  });
};

exports.index = function(req, res){
  MongoClient.connect('mongodb://localhost/exercises', function (err, db){
    if(err){ throw err;}
    console.log('POINT 4');

    var query ={};
    query.name = req.params.name;

    db.collection('exercises').find(query).toArray(function(err, exercises){
      res.send({exercises:exercises});
    });
  });
};

exports.queryName = function(req, res){
  MongoClient.connect('mongodb://localhost/exercises', function (err, db){
    if(err){ throw err;}
    console.log('POINT 5');

    db.collection('exercises').find({name:'run'}).toArray(function(err, exercises){
      res.send({exercises:exercises});
    });
  });
};
