//MAIN JAVASCRIPT FILE


$(document).ready(initialize);



function initialize(){
  $('.number').click(displayNumber);
  $('#flip').click(easyFlip);
  $('#push').click(pushToQueue);
  $('.operator').click(compute);
  $('#clear').click(clearEverything);
}

function displayNumber(){ 
  var display = $('#display').text(); //Get value in display
  var current = this.textContent; //Gets value of button clicked on 
  var output;

  if(current === '.' && containsChar(display, '.')) return; //Dont allow multiple '.' in the display

  if(display === '0' && current !== '.')
       output = current;
    else
       output = display  + current; 
  
    $('#display').text(output);
}

function easyFlip(){

  var display = $('#display').text();
  $('#display').text(-1 * display);
}

function pushToQueue(){


  if ($('li').length > 9){
    $('#display').text('0');
    alert('The Queue is cannot hold more values')
    return;
   }

  var display = $('#display').text();
  $('#display').text('0');
  var $li = $('<li>');
  $li.text(display);
  $('#queue').prepend($li);

  if($('li').length > 2){
    // $('.grey-out').css('background-color', 'grey');
    $('.grey-out').addClass('disengage');

  }
}

function compute(){
  if($('li').length > 2){
    return;
  }

  var operator = this.id;
  var $lis = $('#queue li');
  var numbers = parseTags($lis);

  switch(operator){
   case 'add':
     var sum = numbers[0] + numbers[1];
     displayAndClear(sum);
     break;

   case 'sub':
     var sub = numbers[1] -  numbers[0];
     displayAndClear(sub);
     break;

   case 'mul':
     var product = numbers[0] * numbers[1];
     displayAndClear(product);
     break;

   case 'div':
     var quotient = numbers[1] /  numbers[0];
     quotient = Math.round(quotient * 1000000000)/1000000000;
     displayAndClear(quotient);
     break;
     
   case 'sum':
     $('#queue li').each(function(index, value){
       x = parseFloat(value)

      $('#display').text(value);
     })
     break;

   case 'pow':
     //some stuff
     break;

  }
}


function displayAndClear(x){
  $('#display').text(x);
  $('#queue').text('');
}

function clearEverything(){
  $('#display').text('0');
  $('#queue').text(''); 
  $('.disengage').removeClass('disengage');
}





 /* 
     $.each($('#queue li'),function(index, value) {
     var  ans = ans + value;
    $('#display').text(ans);
      })
 */

/*
function flipSign(){
  var display = $('#display').text();
  var output;
  if (display < 0)
    output = Math.abs(display);
  else
    output = -1 * (Math.abs(display));

  $('#display').text(output)
}
*/


//$.map($lis, function(tag){return parseFloat(tag.textContent);});


