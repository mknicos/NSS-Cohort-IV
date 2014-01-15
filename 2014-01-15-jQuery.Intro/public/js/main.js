   //main.js//
$(document).ready(initialize);

function initialize(){
  // $ means jQuery
  // $('css or jQuery selector')
    $('h1').css('color', 'red');
    $('h1').css('font-size', '30px');
    var currentH1Text = $('h1').text();
    console.log(currentH1Text);
    $('h1').text('jQuery Changed Text!');

    $('div').css('color', '#770077');
    $('#d2').css('font-size', '14px');
    $('#d3').css('background-color', 'yellow');
    $('.c1').css({'font-family':'monospace',
                  'background-color':'lightblue'
                  }).text('Matt');

    //prompt user to select background color for div3
    var colorChoice = prompt('What background color do you want?');
    $('#d3').css('background-color', colorChoice);
    
    //prompt user to select text for the div3
    
    var userDiv3 = prompt('What would you like Div3 to say?');
    $('#d3').text(userDiv3);


   var numPs = $('.cp').length;
   console.log(numPs);
    
}













