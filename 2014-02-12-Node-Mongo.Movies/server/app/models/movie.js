'use strict';

module.exports = function(name, rating, runTime, year, studio, actors, director, poster){
  this.name = name;
  this.rating = rating;
  this.runTime = parseInt(runTime);
  this.year = parseInt(year);
  this.studio = studio;
  this.actors = actors; //should be an array of the actors
  this.director = director;
  this.poster = poster;
};

