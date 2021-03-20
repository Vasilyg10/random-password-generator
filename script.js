// Assignment code here
var generateEl = document.getElementById("generate");


// Click Event
generateEl.addEventListener("click", function() {
  
  // Code to make sure they choose a length between 8 and 128
  var validLength = false;
  
  while (!validLength) {
    var length = parseInt(prompt("How many characters do you want your password to be?", "Please choose a number between 8 and 128."), 10);
    if (/^[0-9]+$/.test(length) && length >= 8 && length <= 128) {
      validLength = true;
      alert("You have chosen your password to have " + length + " characters.");
    }
    else {
      alert("You did not pick a valid number. Please choose a number between 8 and 128.");
    }
  };

  // Code to have them select which characters they want
  var hasLower = confirm("Do you want lowercase letters?");
  if (hasLower) {
    // If they select ok create this string
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  }
  else {
    // If they select cancel create empty string
    var lowerCase = "";
  }
    
  var hasUpper = confirm("Do you want uppercase letters?");
  if (hasUpper) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }
  else {
    var upperCase = "";
  }
    
  var hasNumber = confirm("Do you want numbers?");
  if (hasNumber) {
    var number = "0123456789".split("");
  }
  else {
    var number = "";
  }
    
  var hasSymbol = confirm("Do you want symbols?");
  if (hasSymbol) {
    var symbol = "!@#$%^&*()+{}[]".split("");
  }
  else {
    var symbol = "";
  }
    
  console.log(length, hasLower, hasUpper, hasNumber, hasSymbol);

  // Create empty array to add all true variables into
  var availableCharacters = [];

  // Add all true variables to the empty array
  var arr = availableCharacters.concat(upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, );
  console.log(arr);  

  // Randomize the order of the "arr" array
  var shuffleArray = function(array) {
    array.sort(() => Math.random() - 0.5);
    arr.splice(length, 693);
  };


  shuffleArray(arr);
  console.log(arr);

  // Eliminate commas in the array to make just one long string
  var randomArr = arr.join("");

  // Place the newly created randomArr into the HTML textarea with id="password"
  document.getElementById("password").innerHTML = randomArr;

  // If they hit cancel on all character choices give error message
  if (!randomArr) {
    alert("You have not selected anything, please try again.");
  }
});

// The below code was initially confusing to me so I just started from scratch

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// };

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);