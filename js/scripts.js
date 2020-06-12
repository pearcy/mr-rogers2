// Business Logic 


function factorNumber(number) {
  let rogersArray = [];
  for (let i = 0; i<= number; i++) {
    if (i.toString().includes('3')) {
      rogersArray.push(" Won't you be my neighbor?")
      console.log(rogersArray);
    } else if (i.toString().includes('2')) {
      rogersArray.push(" Boop!")
    } else if (i.toString().includes('1')) {
      rogersArray.push(" Beep!")
    } else
      rogersArray.push(" " + i);
   
  }

  return rogersArray;

}


// UI Logic 

$(document).ready(function() {
  
  // Input
  $('form').submit(function (event) {
    event.preventDefault();
    let number = parseInt($("#inputNumber").val());


  // Output
  
    $('#output').empty();
    $('#output').append("<p>" + factorNumber(number) + "</p>");
 

  }); 
});











