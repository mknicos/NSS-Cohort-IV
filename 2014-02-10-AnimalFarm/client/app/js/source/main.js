(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#create').click(clickCreate);
  }

  function clickCreate(){
    var animal = $('#selectBox').val();
    var name = $('#name').val();
    var age = $('#age').val();
    var gender = $('#gender').val();
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000');
    url += '/animal?type='+animal+'&name='+name+'&gender='+gender+'&age='+age+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

})();

