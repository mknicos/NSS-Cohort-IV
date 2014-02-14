(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getMovies();
    $('#submit').click(submitMovie);
    $('#post').on('click', '.delete', deleteMovie);
    $('#post').on('click', '.editLink', editMovie);
    showSubmit();
    $('#changes').click(submitEdit);
  }

// Gets all movies from database
  function getMovies(){
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    $.getJSON(url, postToScreen);
  }

//Puts all movies in database on screen
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
      //might need a join on actors
      $span6.text(mov[i].actors).addClass('span').addClass('getActors');
      $span7.text(mov[i].director).addClass('span').addClass('getDirector');
      $span8.text('X').addClass('delete');


      $div2.append($span2, $span3, $span4, $span5, $span6, $span7);
      $div.css('background-image', 'url(' + mov[i].poster + ')');
      $div.addClass('posts');
      $div2.addClass('footer');
      var $a = $('<a href=#top>').addClass('editLink');
      var $edit = $('<div class = edit>').text('EDIT');
      $a.append($edit);
      $div.append($span1, $span8, $div2, $a);
      $div.attr('data-id', mov[i]._id);
      $('#post').append($div);
    }
  }

// Posts new movie from form into database
  function submitMovie(event){
    var data = $('#movie').serialize();
    debugger;
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});
    $('#movie input').val('');
    event.preventDefault();
  }

//Called on success of form submit
  function newMovie(movie){
    console.log(movie);
  }

//Send Update request to server
  function submitEdit(event){
    showSubmit();
    debugger;
    var data = $('#movie').serialize();
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    var type = 'PUT';
    var success = updateMovie;
    $.ajax({url:url, data:data, type:type, success:success});
    event.preventDefault();
  }

//Called on success of update form submit
  function updateMovie(movie){
    console.log(movie);
  }


//Populates form with selected movies current data
  function editMovie(){
    showEdit();
    var id = $(this).parent().data('id');
    var url = window.location.origin.replace(/3000/, '4000') + '/movies/' + id;
    $.getJSON(url, function(data){
      var movie = data.movie[0];
      $('#name').val(movie.name);
      $('#rating').val(movie.rating);
      $('#runTime').val(movie.runTime);
      $('#year').val(movie.year);
      $('#studio').val(movie.studio);
      //might need a join
      $('#actors').val(movie.actors);
      $('#director').val(movie.director);
      $('#poster').val(movie.poster);
      $('#hiddenID').val(movie._id);
    });
  }

//Sends delete request to server
  function deleteMovie(){
    var data = $(this).parent().data('id');
    var url = window.location.origin.replace(/3000/, '4000') + '/movies/' + data;
    var type = 'DELETE';
    var success = onSuccess;

    $.ajax({url:url, type:type, data:data, success:success});
  }

//Called on success of delete response
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
    $('#submit').show();
    $('#changes').hide();
  }

  function showEdit(){
    $('#submit').hide();
    $('#changes').show();
  }














})();





