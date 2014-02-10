(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#sum').click(sum);
  }

  function one(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/name?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function two(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/favcolor?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function sum(){
    var num1 = $('#inputA').val();
    var num2 = $('#inputB').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/sum/'+num1+'/'+num2+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

})();

