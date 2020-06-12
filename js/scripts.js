// Business Logic 


function factorNumber(number1) {
  let rogersArray = [];
  for (let i = 0; i<= number1; i++) {
    if (i.toString().includes('3')) {
      rogersArray.push("Won't you be my neighbor?")
    } else 
    console.log("something else");

  }

  return rogersArray;

}





// UI Logic 

$(document).ready(function() {

  // Input
  $('form').submit(function (event) {
    event.preventDefault();
    let number1 = parseInt($("#inputNumber").val());
    // console.log(number);

  // Output
    $('#output').empty();
    $('#output').append("<p>" + number1 + "</p>");

  }); 
});


