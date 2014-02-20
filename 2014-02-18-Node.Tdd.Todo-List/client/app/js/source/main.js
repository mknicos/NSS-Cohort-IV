(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#pSave').click(savePriority);
  }

  function savePriority(){
  // function gets text in priority input form, adds to database, and to table
    
    //get input
    var name = $('#pNameInput').val();
    var value = $('#pValueInput').val();

    // Ajax post to db
    var url = window.location.origin.replace(/3000/, '4000') + '/priorities';
    var obj = {name:name, value: value};
    var type = 'POST';
    var success = addPriorityToTable;

    $.ajax({url: url, type: type, data:obj, success: success});

    event.preventDefault();
  }

  function addPriorityToTable(data){
    //data is an object returned from the server after a POST request
    //it will have an id if it was not a duplicate and successfully added
    //otherwise it will not have an id, but just be the value and name
    if(data._id){
      //create elements
      debugger;
      var $divName = $('<div>').text(data.name);
      var $divValue = $('<div>').text(data.value);
      var $row = $('<tr>').attr('data-id', data._id);
      var $tdName = $('<td>');
      var $tdValue = $('<td>');
      
      $tdName.append($divName);
      $tdValue.append($divValue);
      $row.append($tdName, $tdValue);
      $('#pTable').append($row);
      alert('that worked');
    }else{
      alert('priority name already exists in database');
    }

  }

})();

