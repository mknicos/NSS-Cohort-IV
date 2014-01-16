   //main.js//
$(document).ready(initialize);

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(add);
  $('#prod').click(multiply);
  $('#clear2').click(clear2);
}

function clear(){
  $('#num1').val('');
  $('#num2').val('');
  $('#num1').focus();
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

function add(){
  var num1 = parseFloat($('#input1').val());
  var num2 = parseFloat($('#input2').val());
  var num3 = parseFloat($('#input3').val());
  var num4 = parseFloat($('#input4').val());
  var num5 = parseFloat($('#input5').val());
  var sum = num1 + num2 + num3 + num4 + num5
  
  $('#sumAns').text(sum);
}

function multiply(){
  var num1 = parseFloat($('#input1').val());
  var num2 = parseFloat($('#input2').val());
  var num3 = parseFloat($('#input3').val());
  var num4 = parseFloat($('#input4').val());
  var num5 = parseFloat($('#input5').val());
  var product = num1 * num2 * num3 * num4 * num5
  
  $('#prodAns').text(product);
}


function clear2(){
  $('#input1').val('');
  $('#input2').val('');
  $('#input3').val('');
  $('#input4').val('');
  $('#input5').val('');
  $('#sumAns').text('');
  $('#prodAns').text('');
}



// console.log($( ".inputs" ) [2]);
//



