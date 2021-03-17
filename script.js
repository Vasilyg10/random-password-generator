// Assignment code here
// On button click open prompt
var writePassword = function() {
  num = parseInt(prompt("How many characters do you want your password to be?", "Please choose a number between 8 and 128."), 10);

  // If they don't enter a number between 1 and 128 give error and restart prompt
  if (/^[0-9]+$/.test(num) && num >= 8 && num <= 128) {
    alert("You have chosen your password to have " + num + " characters.");
    return true;
  } 
  else {
    alert("You did not pick a valid number. Please choose a number between 8 and 128.");
    writePassword();
  }

  


  // choose how which characters
  function generatePassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        textVal = "";
        for (var i = 0, n = charset.length; i < num; ++i) {
          textVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return textVal;
  }
  generatePassword() = passwordText;
  console.log(textVal);
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);