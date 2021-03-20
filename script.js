// Assignment code here
var generateEl = document.getElementById("generate");


// Click Event
generateEl.addEventListener("click", function() {
  
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

  var hasLower = confirm("Do you want lowercase letters?");
  if (hasLower) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  }
  else {
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

  var availableCharacters = [];

  var arr = availableCharacters.concat(upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, upperCase, lowerCase, number, symbol, );
  console.log(arr);  

  var shuffleArray = function(array) {
    array.sort(() => Math.random() - 0.5);
    arr.splice(length, 693);
  };


  shuffleArray(arr);
  console.log(arr);

  var randomArr = arr.join("");

  document.getElementById("password").innerHTML = randomArr;

  if (!randomArr) {
    alert("You have not selected anything.");
  }
});

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