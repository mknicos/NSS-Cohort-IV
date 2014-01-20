

$(document).ready(initialize);

function initialize(){
  $('#add-color').click(clickAddColor);
  $('#add-pixels').click(clickAddPixel);
  $('#colors').on('click', '.color', clickSelectColor);
  $('#pixels').on('mouseover', '.pixel', hoverColorPixel);
}

  function clickSelectColor(){
   if ($(this).hasClass('selected')){ 
      $(this).removeClass('selected');
   } else{ 
      $('.color').removeClass('selected');
      $(this).addClass('selected');
   }
}

function hoverColorPixel(){
  var color = $('.selected').css('background-color');
  $(this).css('background-color', color);
}


function clickAddColor(){
    var userColor = $('#color-text').val();
    $('#color-text').val('');
    $('#color-text').focus();

    var $box = $('<div>');
    $box.addClass('color');
    $box.css('background-color', userColor);
    $('#colors').prepend($box);
}

function clickAddPixel(){
  var num = $('#number-text').val();
  num = parseInt(num);

  for(var i = 0; i < num; i++){
    var $pixel = $('<div>');
      $pixel.addClass('pixel');
      $('#pixels').prepend($pixel);
  }
}
