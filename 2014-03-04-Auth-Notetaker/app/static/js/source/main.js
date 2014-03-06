(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.showLogin').click(showLogin);
    $('.showRegister').click(showRegister);

  }

  function showLogin(){
    $('#log').fadeIn(800);
    $('#reg').hide();
    $('#log').removeClass('hide');
  }

  function showRegister(){
    $('#reg').fadeIn(800);
    $('#log').hide();
    $('#reg').removeClass('hide');
  }
})();

