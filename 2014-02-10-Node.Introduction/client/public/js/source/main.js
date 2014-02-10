(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#sum').click(sum);
    $('#canDrink').click(canIDrink);
    $('#product').click(multiply);
    $('#transform').click(transform);
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
      $('#answer').text(data.sum);
    });
  }

  function canIDrink(){
    var age = $('#age').val();
    var name = $('#name').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/drink/'+name+'/'+age+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#display').text(data.response);
    });
  }

  function multiply(){
    var numbers = $('#numbers').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/product?numbers=' + numbers + '&callback=?';
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
      $('#productAnswer').text(data.product);
    });
  }

  function transform(){
    console.log('Transform');
    var names = $('#names').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/product?numbers=' + names + '&callback=?';
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
      $('#productAnswer').text(data.product);
    });
  }
})();

