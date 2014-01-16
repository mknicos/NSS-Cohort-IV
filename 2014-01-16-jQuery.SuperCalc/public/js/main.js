//MAIN JAVASCRIPT FILE


$(document).ready(initialize);



function initialize(){
  $('.number').click(displayNumber);
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
  
    $('#answer').text(output);
}


