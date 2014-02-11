(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getExercises();
  }

  function getExercises(){
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises/swim';
    console.log(url);
    $.getJSON(url, displayExercises);
  }

  function displayExercises(data){
    console.log(data);
    for(var i = 0; i < data.exercises.length; i++){
      var $name = $('<td>');
      var $time = $('<td>');
      var $cals = $('<td>');
      var $date = $('<td>');

      $name.text(data.exercises[i].name);
      $time.text(data.exercises[i].time);
      $cals.text(data.exercises[i].calories);
      $date.text(data.exercises[i].date);

      var $row = $('<tr>');

      $row.append($name, $time, $cals, $date);
      $('#exercises > tbody').prepend($row);
    }
  }

})();

