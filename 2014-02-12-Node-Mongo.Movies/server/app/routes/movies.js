'use strict';
var Movie = require('../models/movie');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var r = req.body;
  var name = r.name;
  var rating = r.rating;
  var runTime = r.runTime;
  var year = r.year;
  var studio = r.studio;
  var actors = r.actors;
  var director = r.director;
  var poster = r.poster;
  
  var movie = new Movie(name, rating, runTime, year, studio, actors, director, poster);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};
