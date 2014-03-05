(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#newUserButton').click(displayRegister);
    $('#loginButton').click(displayLogin);
  }

  function displayRegister(){
    $('#registerForm').toggle();
  }

  function displayLogin(){
    $('#loginForm').toggle();
  }

})();

