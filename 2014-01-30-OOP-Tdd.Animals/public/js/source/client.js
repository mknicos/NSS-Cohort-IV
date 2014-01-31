/* jshint unused: false */
var Client = (function(){
  'use strict';

  function Client(name){
    this.name = name;
    this.animalsOwned = [];

  }

  Client.prototype.adopt = function(animal){
    this.animalsOwned.push(animal);
  };

  return Client;

})();
