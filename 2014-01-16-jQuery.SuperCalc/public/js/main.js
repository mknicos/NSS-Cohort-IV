//MAIN JAVASCRIPT FILE


$(document).ready(initialize);



function initialize(){
  $('.number').click(displayNumber);
  $('.operator').click(flipSign);
}

function displayNumber(){ 
  var display = $('#display').text();
  var current = this.textContent; 
  var output;

  if(current === '.' && display.indexOf('.') !== -1) return;

  if(display === '0' && current !== '.')
       output = current;
    else
       output = display  + current; 
  
    $('#display').text(output);
}

function flipSign(){
  debugger;
  var display = $('#display').text();
  var output;
  if (display < 0)
    output = Math.abs(display);
  else
    output = -1 * (Math.abs(display));

  $('#display').text(output)
}

function dosomething(){
  alert('hey it works');
}
