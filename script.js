// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "0123456789";
var speacial = "!#$%&()*+,-./<=>?@[\]^_`{|}~";
var stored = [];
var hasLowerCase = true;
var hasUpperCase = false;
var hasNumber = false;
var hasSpecial =false;

function generatePassword() {
var passwordLength = prompt("how long do you want your password to be?")

var hasLowerCase = confirm("do you want lower case letters?")
var hasNumber = confirm("do you want upper case letters?")
var hasSpecial = confirm("do you want want special characters?")


  // CODE GOES HERE

  if (hasLowerCase) {
    var random = Math.floor(Math.random() * letters.length);
    var selectedLetter = letter[random];
    stored.push(selectedLetter);
    console.log(selectedLetter);
  }
 
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Mathrandom())
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;

}

// Add event listener to generate button
} 
generateBtn.addEventListener("click", writePassword)


