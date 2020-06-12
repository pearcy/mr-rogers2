// Business Logic 


function factorNumber(number) {
  let rogersArray = [];
  for (let i = 0; i<= number; i++) {
    if (i.toString().includes('3')) {
      rogersArray.push("Won't you be my neighbor?")
      console.log(rogersArray);
    } else 
    console.log("something else");

  }

  return rogersArray;

}


// UI Logic 

$(document).ready(function() {
  console.log('JavaScript is working')

  // Input
  $('form').submit(function (event) {
    event.preventDefault();
    let number = parseInt($("#inputNumber").val());



  // Output
  
    $('#output').empty();
    $('#output').append("<p>" + factorNumber(number) + "</p>");
 

  }); 
});



// UI Logic Test 



// $(document).ready(function () {
//   console.log('JavaScript is working')

//   // UI logic
//   $('form').submit(function (event) {
//     event.preventDefault();
//     let number1 = parseInt($("#inputNumber").val());

//     // Results
    
//     $("output").show();
//     $('#output').empty();
//     $("#output").append("<p>" + factorNumber(number1) + "</p>");
//   });
// });








