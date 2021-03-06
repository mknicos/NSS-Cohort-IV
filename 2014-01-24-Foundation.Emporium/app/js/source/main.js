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
    updateTotals();
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

  function sum(numbers){
    var total = 0;
    for(var i = 0; i < numbers.length; i ++){
      total += numbers[i];
    }
    return total;
  }

  function updateTotals(){
    var $amounts = $('table > tbody > tr > td:nth-child(2)');
    var numbers = transformToNumbers($amounts);
    console.log(numbers);

  }

  function transformToNumbers($tds){
    $.map($tds, function(td){
      return  td.textContent.slice(1) * 1;
    });
  }



})();
