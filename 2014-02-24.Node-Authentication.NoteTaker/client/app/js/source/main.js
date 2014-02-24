(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#showLogin').click(showForm);
    $('#register').click(submitRegister);
    $('#login').click(submitLogin);
  }

  function showForm(event){
    event.preventDefault();

    $('#user').toggle();
    $('#showLogin').toggle();
  }

  function submitRegister(event){
    event.preventDefault();

    $('#user').hide();
    $('#showLogin').toggle();

    var email= $('#email').val();
    var password= $('#password').val();

    var url = window.location.origin.replace(/3000/, '4000') + '/users';
    var data = {email : email, password: password};
    var type = 'POST';

    $.ajax({data:data, url:url, type:type, success: postSubmit});
  }

  function submitLogin(event){
    event.preventDefault();

    $('#user').hide();
    $('#showLogin').toggle();

    var email= $('#email').val();
    var password= $('#password').val();

    var url = window.location.origin.replace(/3000/, '4000') + '/users';
    var data = {email : email, password: password};
    var type = 'PUT';

    $.ajax({data:data, url:url, type:type, success: displayLoginMessage});
  }

  function displayLoginMessage(response){
    console.log(response);
  }

  function postSubmit(response){
    if(response.isSuccess){
      alert('register successful');
      $('#user').fadeOut();
    }else{
      alert('That email is already registered');
    }
  }


})();

