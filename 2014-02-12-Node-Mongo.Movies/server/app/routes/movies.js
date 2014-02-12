'use strict';
var Movie = require('../models/movie');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var movie = new Movie(req.body);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  console.log('index fired');
  var db = req.app.locals.db;
  var movies = db.collection('movies');

  movies.find().toArray(function(err, movies){
    res.send({movies:movies});
  });
};
