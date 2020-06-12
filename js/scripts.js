// Business Logic 







// UI Logic 

$(document).ready(function() {
  console.log('JavaScript is working')

  $('form').submit(function (event) {
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    console.log(number);



  }); 
});


