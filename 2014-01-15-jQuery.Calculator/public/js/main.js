   //main.js//
$(document).ready(initialize);

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
}

function clear(){
  $('#num1').val('');
  $('#num2').val('');
  $('#num2').focus();
  $('#op').val('');
  $('#result').text('');
}
  

function calculate(){
  var num1 = parseFloat($('#num1').val());
  var num2 = parseFloat($('#num2').val());
  var operation = $('#op').val();
  var result = compute(num1,num2,operation);

    $('#result').text(result);
}

function compute(x,y,op){
  var result;
  if(op === "+")
    result = x + y;
  else if (op === "-")
    result = x - y;
  else if (op === "/")
    result = x / y;
  else if (op === "*")
    result = x * y;
  else 
    console.log("not a valid input")
  
  return result;
}










