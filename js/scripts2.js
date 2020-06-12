// Business Logic 

// let student = { name:"Bill", age: 25, degree: "Masters" };
// for (let item in student) {
//    console.log(student[item]);     // => "Bill", then 25, then "Masters"
// }

function factorNumber(number) {
  let rogersArray = [];
  for (let i = 0; i<= number; i++) {
    if (i.toString().includes('3')) {
      rogersArray.push("Won't you be my neighbor?")
    } else 
    console.log("something else");

  }



  // let numberArray = [];
  // for (let item in numberArray) {
  //   console.log(numberArray[item]);

    // if (numberArray.includes('3')) {
    //   numberArray.push("Won't you be my neighbor")
    //   console.log(numberArray);
    // } else
    // console.log("something else");
  
  // }



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


