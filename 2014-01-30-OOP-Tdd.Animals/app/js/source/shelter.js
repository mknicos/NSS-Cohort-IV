/* jshint unused: false */

var Shelter = (function(){

  'use strict';


  function Shelter(x){
    this.name = x;
    this.location = 'Not Defined';
    this.capacity = 0;
  }

  Shelter.prototype.setHours = function(times){
      var hours = _.map(times, function(things){
        return things.day + ' ' + things.open + '-' + things.close;
      });

      this.hours = hours.join(', ');
    };


  return Shelter;
})();






   // {day:'Wed', open:'11am', close: '2pm'},

    //{day:'Fri', open:'9am', close: '4pm'}
