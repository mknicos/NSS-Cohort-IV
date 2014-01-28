/* global Animal: false */

(function(){

  'use strict';


  window.animalFactory = function(){
    var animals = [];
    var animal;

    var photos = [];
    photos[0]= 'http://6269-9001.zippykid.netdna-cdn.com/wp-content/uploads/2013/09/Dog-Computer-Wallpaper.jpg';
    animal = new Animal('Max', '4', 'male', photos, 'Happyish', 'yellow', 'dog');
    animals.push(animal);

    photos = [];
    photos[0]= 'http://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Blackcat-Lilith.jpg/225px-Blackcat-Lilith.jpg';
    animal = new Animal('Sandy', '7', 'female', photos, 'Sneaky', 'black', 'cat');
    animals.push(animal);

    photos = [];
    photos[0]= 'http://a1.cdnsters.com/static/images/dogster/breeds/english_shepherd.jpg';
    animal = new Animal('Buddy', '10', 'male', photos, 'jumpy', 'red', 'dog');
    animals.push(animal);

    photos = [];
    photos[0]= 'http://www.africapoint.net/wp-content/uploads/2012/10/green-mamba.jpg';
    animal = new Animal('Sherman', '1', 'male', photos, 'slivers a lot', 'green with red spots', 'snake');
    animals.push(animal);

    photos = [];
    photos[0]= 'http://images.nationalgeographic.com/wpf/media-live/photos/000/004/cache/african-elephant_435_600x450.jpg';
    animal = new Animal('Bigem', '20', 'female', photos, 'likes the couch', 'grey', 'elephant');
    animals.push(animal);
    debugger;
    return animals;
  };

})();
