/* global Animal, animalFactory: false */

(function(){

  'use strict';

  $(document).ready(initialize);

  var radio;
  var animals = [];

  function initialize(){
    $('#addPhoto').click(clickAddPhoto);
    $('#addAnimal').click(clickAddAnimal);
    $('form input').on('change', function() {
      radio = $('input[name="gender"]:checked', 'form').val();
    });
    animals = animalFactory();
    displayAnimals();
  }

  function clickAddPhoto(){
      var url = $('#photoURL').val();
      var $div = $('<div>');
      $div.css('background-image', 'url(' + url + ')');
      $('#photocontain').prepend($div);
      $('#photoURL').val('');
      $('#photoURL').focus();
      event.preventDefault();
    }

  function clickAddAnimal(){
    var name = $('#name').val();
    var species = $('#species').val();
    var age = $('#age').val() * 1;
    var color = $('#color').val();
    var description = $('#description').val();
    var photos = getAnimalPhotos();
    var gender = radio;

    var animal = new Animal(name, age, gender, photos, description, color, species);
    animals.push(animal);

  }

  function getAnimalPhotos(){
    var urls = [];
    for(var i = 0; i < $('#photocontain div').length; i++){
      var $div = $('#photocontain div')[i];
      var imageURL = $div.style.backgroundImage;
      urls.push(imageURL);
    }
    event.preventDefault();
  }

  function displayAnimals(){
    for(var i = 0; i < animals.length; i ++){
      var $tr = $('<tr>');
      var $td = $('<td>');
      $td.text(animals[i].name);
      $tr.append($td);

      $td = $('<td>');
      $td.text( animals[i].age);
      $tr.append($td);
      
      $td = $('<td>');
      $td.text(animals[i].gender);
      $tr.append($td);

      $td = $('<td>');
      $td.text(animals[i].description);
      $tr.append($td);

      $td = $('<td>');
      $td.text(animals[i].color);
      $tr.append($td);

      $td = $('<td>');
      $td.text(animals[i].species);
      $tr.append($td);

      $td = $('<td>');
      $td.css('bacground-image', 'url('+animals[i].photos+')');
      $tr.append($td);

      $('tbody').append($tr);
    }

  }

})();
