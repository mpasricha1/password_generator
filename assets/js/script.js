// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordObj = {
	length: 0, 
	lower: false, 
	upper: false,
	numeric: false, 
	special: false
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Validates the length of the password if it does not fit requirements reprompts the user
function validatePasswordLength(){
	passwordObj.length = prompt("Enter a password length between 8 and 128 characters"); 

	if (passwordObj.length < 8 || passwordObj.length > 128){
		alert("Password length does not meet requirement. Reenter password length.");
		validatePasswordLength(); 
	}else{
		return;
	}
}

function setParamaters(){ 
	passwordObj.lower = confirm("Do you want to include lowercase?"); 
	passwordObj.upper = confirm("Do you want to include uppercase?"); 
	passwordObj.numeric = confirm("Do you want to include numerics?"); 
	passwordObj.special = confirm("Do you want to include special characters?")

	if (passwordObj.lower === false && passwordObj.upper === false 
		&& passwordObj.numeric === false & passwordObj.special === false ){
		alert("You must choose at least 1 of the requirement."); 
		setParamaters()
	}else{
		return;
	}
}

function generatePassword(){
	validatePasswordLength();
	setParamaters();
	console.log(passwordObj);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);