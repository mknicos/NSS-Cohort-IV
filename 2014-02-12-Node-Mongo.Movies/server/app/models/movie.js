'use strict';

module.exports = function(movie){
  this.name = movie.name || '';
  this.rating = movie.rating || '';
  this.runTime = parseInt(movie.runTime || 0);
  this.year = parseInt(movie.year || 0);
  this.studio = movie.studio || '';
  this.actors = movie.actors ? movie.actors.split(', ') : [] ; //should be an array of the actors
  this.director = movie.director || '';
  this.poster = movie.poster || '';
};

