//MAIN JAVASCRIPT FILE


$(document).ready(initialize);



function initialize(){

  $('.number').click(displayNumber);    //Any number you click on is displayed
  $('#flip').click(easyFlip);           //changes sign of display
  $('#push').click(pushToQueue);        //Anything in the display is pushed to the queue
  $('.operator').click(compute);        //binary operations to numbers in queue '+,-,/,*
  $('#clear').click(clearEverything);   //clears queue and display
  $('#sum').click(addQueue);            //takes numbers from display and adds to queue
  $('#pow').click(exponent);            //exponentiates the numbers
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

function easyFlip(){      //makes negative display positive, and vica versa

  var display = $('#display').text();
  $('#display').text(-1 * display);
}

function pushToQueue(){


  if ($('li').length > 9){     // Dissalows more than 9 numbers in the queue
    $('#display').text('0');
    alert('The Queue is cannot hold more values')
    return;
   }

  var display = $('#display').text(); //remove number form display and add to queue
  $('#display').text('0');
  var $li = $('<li>');
  $li.text(display);
  $('#queue').prepend($li);

  if($('li').length < 2){
    $('.grey-out').addClass('disengage');
  }

  if($('li').length == 2){
    $('.grey-out').removeClass('disengage');
  }

  if($('li').length > 2){                  //change apperance of binary operator buttons when they cant be used
    $('.grey-out').addClass('disengage');

  }
}

function compute(){
  if($('li').length > 2){     //disallow use of binary operators when there are more than 2 #s in queue
    return;
  }
  var operator = this.id;
  var $lis = $('#queue li');
  var numbers = parseTags($lis);
  if(numbers[0] == 'NaN' || numbers[1] == 'NaN') //still need to work on this
    return;

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
  }
}

function addQueue(){          //sums all numbers in the queue and displays total in the display
  var $lis = $('#queue li');
  var numbers = parseTags($lis);
  var result = 0;

for(var i =0; i < numbers.length; i++)
    result += numbers[i];
    displayAndClear(result);
}

function exponent(){    //Will display the result of the 1st number to the 2nd numbers power
  var $lis = $('#queue li');
  var numbers = parseTags($lis);
  var result = 0;

  result = Math.pow(numbers[1], numbers[0])
  displayAndClear(result);
}





function displayAndClear(x){          //will put the argument on the display and clear queue
  $('#display').text(x);
  $('#queue').text('');
  $('.grey-out').addClass('disengage');
}

function clearEverything(){           //Clears display, clears queue, and returns buttons to normal state
  $('#display').text('0');
  $('#queue').text(''); 
  $('.grey-out').addClass('disengage');
}






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


