// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
	var specialCharacters = confirm("Do you want to include special characters?")
	var passwordLength = prompt("Enter password length (8-128 chars)")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
