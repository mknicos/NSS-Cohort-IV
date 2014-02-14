(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getMovies();
    $('#movie').submit(submitMovie);
    $('#post').on('click', '.delete', deleteMovie);
    $('#post').on('click', '#edit', editMovie);
    showSubmit();
    $('#movie').submit(submitEdit);
  }


  function submitMovie(event){
    var data = $(this).serialize();
    debugger;
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});
    $('#movie input').val('');
    event.preventDefault();
  }

  function submitEdit(event){
    showSubmit();
    event.preventDefault();
  }

  function newMovie(movie){
    console.log(movie);
  }

  function getMovies(){
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    $.getJSON(url, postToScreen);
  }

  function editMovie(){
    showEdit();
    var id = $(this).parent().data('id');
    var url = window.location.origin.replace(/3000/, '4000') + '/movies/' + id;
    $.getJSON(url, function(data){
      var movie = data.movie[0];
      console.log(movie);
      $('#name').val(movie.name);
      $('#rating').val(movie.rating);
      $('#runTime').val(movie.runTime);
      $('#year').val(movie.year);
      $('#studio').val(movie.studio);
      $('#actors').val(movie.actors.join(', '));
      $('#director').val(movie.director);
      $('#poster').val(movie.poster);
    });
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
      $span1.text(mov[i].name).addClass('title').addClass('getTitle');
      $span2.text(mov[i].rating).addClass('span').addClass('getRating');
      $span3.text(mov[i].runTime).addClass('span').addClass('getRunTime');
      $span4.text(mov[i].year).addClass('span').addClass('getYear');
      $span5.text(mov[i].studio).addClass('span').addClass('getStudio');
      $span6.text(mov[i].actors.join(' & ')).addClass('span').addClass('getActors');
      $span7.text(mov[i].director).addClass('span').addClass('getDirector');
      $span8.text('X').addClass('delete');
      $div2.append($span2, $span3, $span4, $span5, $span6, $span7);
      $div.css('background-image', 'url(' + mov[i].poster + ')');
      $div.addClass('posts');
      $div2.addClass('footer');
      var $edit = $('<div id = edit>').text('EDIT');
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

  function showSubmit(){
    $('#changes').hide();
    $('#submit').show();
  }

  function showEdit(){
    $('#submit').hide();
    $('#changes').show();
  }














})();





