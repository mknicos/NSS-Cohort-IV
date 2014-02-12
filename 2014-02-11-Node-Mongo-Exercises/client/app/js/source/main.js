(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#create').click(createExercise);
    getExercises();

  }

  function createExercise(){
    var name = $('#name').val();
    var time = $('#time').val();
    var cals = $('#cals').val();
    var date = $('#date').val();

    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    var options ={};
    options.url = url;
    options.type = 'POST';
    options.data = {name:name, time:time, calories:cals, date:date};
    options.success = exerciseCreated;
    $.ajax(options);
  }

  function exerciseCreated(){

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

