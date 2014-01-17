

$(document).ready(initialize);

function initialize(){
  $('#add-color').click(addColor);
  $('#add-pixel').click(clickAddPixel);
  $('#colors').on('click', '.color', clickSelectColor);
  $('#pixels').on('mouseover', '.pixels', hoverColorPixel);
}

  function clickSelectColor(){
   if ($(this).hasClass('selected')) 
      $(this).removeClass('selected');
   else{ 
      $('#colors').removeClass('selected');
      $(this).addClass('selected');
   }
}

function hoverColorPixel(){
  var color = $('selected').css('background-color');
  $(this).css('background-color', color);
}


function addColor(){
    var userColor = $('#color-input').val();
    $('#color-input').val('');
    $('#color-input').focus();

    var $box = $('<div>');
    $box.addClass('color');
    $box.css('background-color', userColor);
    $('#colors').prepend($box);
}

function clickAddPixel(){
  var num = $('num-input').val();
  num = parseInt(num);

  for(var i = 0; i < num; i++){
    var $pixel = $('<div>')
      $pixel.addClass('pixel');
      $('#pixels').prepend($pixel);
  }
}
