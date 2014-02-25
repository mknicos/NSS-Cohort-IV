(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add').click(add);
    $('#multiply').click(multiply);
  }

  function add(){
    var a = $('#num1').val();
    var b = $('#num2').val();
    var url = '/calc/add?a='+a+'&b='+b;
    $.getJSON(url, function(response){
      $('#answer').text(response.answer);
    });
  }

  function multiply(){
    var numbers = $('#numbers').val();
    numbers = numbers.split(' ,');
    var url = '/calc/multiply?numbers='+numbers;
    $.getJSON(url, function(response){
      $('#product').text(response.answer);
    });
  }

})();

