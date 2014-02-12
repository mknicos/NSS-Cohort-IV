(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getMovies();
    $('#movie').submit(submitMovie);
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
      var $span1 = $('<span>');
      var $span2 = $('<span>');
      var $span3 = $('<span>');
      var $span4 = $('<span>');
      var $span5 = $('<span>');
      var $span6 = $('<span>');
      var $span7 = $('<span>');
      $span1.text(mov[i].name).addClass('title');
      $span2.text(mov[i].rating);
      $span3.text(mov[i].runTime);
      $span4.text(mov[i].year);
      $span5.text(mov[i].studio);
      $span6.text(mov[i].actors);
      $span7.text(mov[i].director);
      $div.append($span1, $span2, $span3, $span4, $span5, $span6, $span7);
      $div.css('background-image', 'url(' + mov[i].poster + ')');
      $('#post').append($div);
    }

  }
})();
