(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-item').click(addItem);
  }

  function addItem(event){                   //Function gets data from input fields
    var item = $('#item').val();
    var quantity = $('#quantity').val();
    var amount = $('#amount').val();
    var total = quantity * amount;
    addToTable(item, quantity, amount, total);
    event.preventDefault();
  }

  function addToTable(item,quantity, amount, total){      //Function takes input values and adds to table
    var $tr = $('<tr>');
    var $item = $('<td>');

    $item.text(item);
    var $quantity = $('<td>');
    $quantity.text(quantity);
    var $amount = $('<td>');
    $amount.text(numToCurrency(amount * 1));
    var $total = $('<td>');
    $total.text(numToCurrency(total * 1));

    $tr.append($item, $quantity, $amount, $total);
    $('table tbody').append($tr);
  }

  function numToCurrency(number){
    return '$' + number.toFixed(2);
  }



})();
