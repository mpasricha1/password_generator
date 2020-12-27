// Assignment Code
var generateBtn = document.querySelector("#generate");
//Password Object that holds all the users choices
var passwordObj = {
	length: 0, 
	lower: false, 
	upper: false,
	numeric: false, 
	special: false
}

function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLowerCase(){
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber(){
   return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
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

	if(passwordObj.length < 8 || passwordObj.length > 128){
		alert("Password length does not meet requirement. Reenter password length.");
		validatePasswordLength(); 
	}else{
		return;
	}
}
// Sets the paramaters from user input reprompts if everything is set to false 
function setParamaters(){ 
	passwordObj.lower = confirm("Do you want to include lowercase?"); 
	passwordObj.upper = confirm("Do you want to include uppercase?"); 
	passwordObj.numeric = confirm("Do you want to include numerics?"); 
	passwordObj.special = confirm("Do you want to include special characters?")

	if(passwordObj.lower === false && passwordObj.upper === false 
		&& passwordObj.numeric === false & passwordObj.special === false ){
		alert("You must choose at least 1 of the requirement."); 
		setParamaters()
	}else{
		return;
	}
}

function generateCharacter(){ 
	var charList = [];

	if(passwordObj.lower === true){ 
		charList.push(getRandomLowerCase());
	}
	if(passwordObj.upper === true){
		charList.push(getRandomUpperCase());
	}
	if(passwordObj.numeric === true){
		charList.push(getRandomNumber());
	}
	if(passwordObj.special === true){
		charList.push(getRandomSymbol());
	}
	return charList[Math.floor(Math.random() * charList.length)];
}

function generatePassword(){
	var password = ""

	validatePasswordLength();
	setParamaters();

	for(var i = 0; i < passwordObj.length; i++){
		password += generateCharacter()
	}
	
	return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);