(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    //loadAlbums();
  }
/*
  function loadAlbums(){
    var url = '/albums';
    $.getJSON(url, refine);
  }

  function refine(albums){
    for (var i = 0; i < albums.albums.length; i++){
      populateAlbums(albums.albums[i]);
    }
  }

  function populateAlbums(album){
    debugger;
    console.log(album);
    var $img = $('<div>');
    $img.addClass('thumbnail');
    $img.attr('data-id', album._id);
    $img.attr('data-taken', album.taken);
    $img.css('background-image', 'url('+album.cover.slice(65)+')');
    $img.text(album.title);
    $('#albums').prepend($img);
  }
*/
})();

