/* jshint unused: false */

var Shelter = (function(){

  'use strict';

  var hours;
  var animals = [];

  function Shelter(x){
    this.name = x;
    this.location = 'Not Defined';
    this.capacity = 0;
  }

  Shelter.prototype.setHours = function(times){
      var tmphours = _.map(times, function(things){
        return things.day + ' ' + things.open + '-' + things.close;
      });

      hours = tmphours.join(', ');
    };

  Shelter.prototype.addAnimal = function(animal){
    animals.push(animal);
  };

  Shelter.prototype.placeAnimal = function(name){
    var tmpAnimals = _.remove(animals, function(x){
      return x.name === name;
    });
    return tmpAnimals[0];
  };
  
  Shelter.prototype.getHours = function(){
    return hours;
  };

  Shelter.prototype.animalCount = function(){
    return animals.length;
  };
  return Shelter;
})();






   // {day:'Wed', open:'11am', close: '2pm'},

    //{day:'Fri', open:'9am', close: '4pm'}
