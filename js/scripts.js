// Business Logic 

function factorNumber(number) {
  let numberArray = [];
  // for of loop 

}





// UI Logic 

$(document).ready(function() {

  // Input
  $('form').submit(function (event) {
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    console.log(number);

  // Output
    $('#output').empty();
    $('#output').append("<p>" + number + "</p>");

  }); 
});


