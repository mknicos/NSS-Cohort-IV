'use strict';
var Movie = require('../models/movie');
var mongodb = require('mongodb');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var movie = new Movie(req.body);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');

  movies.find().toArray(function(err, movies){
    res.send({movies:movies});
  });
};

exports.delete = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = new mongodb.ObjectID(req.params.id);

  movies.remove({_id: id}, function(err, numDeleted){
    res.send({removed: numDeleted, id:req.params.id});
  });
};
