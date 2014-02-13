(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getMovies();
    $('#movie').submit(submitMovie);
    $('#post').on('click', '.delete', deleteMovie);
  }


  function submitMovie(event){
    var data = $(this).serialize();
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});
    $('#movie input').val('');
    event.preventDefault();
  }

  function newMovie(movie){
    console.log(movie);
  }

  function getMovies(){
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    $.getJSON(url, postToScreen);
  }

  function postToScreen(data){
    var mov = data.movies;
    for(var i = 0; i < data.movies.length; i++){
      var $div = $('<div>');
      var $div2 = $('<div>');
      var $span1 = $('<span>'); //Title
      var $span2 = $('<span>');
      var $span3 = $('<span>');
      var $span4 = $('<span>');
      var $span5 = $('<span>');
      var $span6 = $('<span>');
      var $span7 = $('<span>');
      var $span8 = $('<span>'); //Delete Button
      $span1.text(mov[i].name).addClass('title');
      $span2.text(mov[i].rating).addClass('span');
      $span3.text(mov[i].runTime).addClass('span');
      $span4.text(mov[i].year).addClass('span');
      $span5.text(mov[i].studio).addClass('span');
      $span6.text(mov[i].actors.join(' & ')).addClass('span');
      $span7.text(mov[i].director).addClass('span');
      $span8.text('X').addClass('delete');
      $div2.append($span2, $span3, $span4, $span5, $span6, $span7);
      $div.css('background-image', 'url(' + mov[i].poster + ')');
      $div.addClass('posts');
      $div2.addClass('footer');
      var $edit = $('<div id = edit>');
      $div.append($span1, $span8, $div2, $edit);
      $div.attr('data-id', mov[i]._id);
      $('#post').append($div);
    }

  }

  function deleteMovie(){
    var data = $(this).parent().data('id');
    var url = window.location.origin.replace(/3000/, '4000') + '/movies/' + data;
    var type = 'DELETE';
    var success = onSuccess;

    $.ajax({url:url, type:type, data:data, success:success});
  }

  function onSuccess(data){
    if(data.removed === 1){
      var thing = $('.posts[data-id="' +data.id + '"]');
      thing.remove();
    }
    else{
      alert('Something Went Wrong');
    }
  }

})();
