/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);

  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/44ef700b986d88f1/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, recieve);

  }
  
  function recieve(data){
    var temp = data.current_observation.temperature_string;
    var wind = data.current_observation.wind_mph;
    $('h2').text(temp);
    $('h3').text('The Current Wind is: ' + wind + 'mph' );
  }

})();
