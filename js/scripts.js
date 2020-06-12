// Business Logic 

function factorNumber(number) {
  let numberArray = [];
  for (const element of array) {
    if (numberArray.includes('3')) {
      numberArray.push("Won't you be my neighbor")
      console.log(number);
    } else
    console.log("something else");
  
  }



}





// UI Logic 

$(document).ready(function() {

  // Input
  $('form').submit(function (event) {
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    // console.log(number);

  // Output
    $('#output').empty();
    $('#output').append("<p>" + number + "</p>");

  }); 
});


