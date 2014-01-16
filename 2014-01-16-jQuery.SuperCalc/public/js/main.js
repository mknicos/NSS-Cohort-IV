//MAIN JAVASCRIPT FILE

$(document).ready(initialize);

function initialize(){
  $('.number').click(displayNumber);
}




function displayNumber(){
  $('answer').text(this.textContent);
}











