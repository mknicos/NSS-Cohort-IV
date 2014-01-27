(function(){
  'use strict';

  $(document).ready(init);

  var timer;


  function init(){
    $('#start').click(clickStart);
    $('#stop').click(clickStop);
    $('#reset').click(clickReset);
    //setTimeout(alertMe, 2000);
  }
  
  function clickStart(){
    clearInterval(timer);
    timer = setInterval(makeBox, 250);
  }

  function makeBox(){
    var  $div = $('<div>');
    $div.addClass('box');
    $div.css('background-color', randomColor());
    $('#container').prepend($div);
   
  }

  //function makeBigBox(){
   // var  $div = $('<div>');
   // $div.addClass('bigBox');
   // $div.css('background-color', randomColor());
   // $('#container').prepend($div);
   
 // }

  function clickStop(){
    clearInterval(timer);
  }

  function clickReset(){
    $('#container').empty();
  }

  function randomColor(){
    //generate random color in rgba format

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = Math.random();

    var color = 'rgba('+r+','+g+','+b+',+'+a+')';

    return color;

  }








})();
