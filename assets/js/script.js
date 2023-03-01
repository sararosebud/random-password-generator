// Assignment Code


var generateBtn = document.querySelector("#generate");


var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()";
var upperCharacters = lowerCharacters.toUpperCase();
var numbers = '0123456789'


var userSelection = [];
let finalPassword = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  
  
  passwordText.value = password.join('');
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", )



function generatePassword(){
  let passLength = prompt(' Please choose length between 8 and 128'); 


  let isNumb = /^\d+$/.test(passLength);

  if(!isNumb || isNaN(passLength) || passLength < 8 || passLength > 128){
    alert('Please enter a number between 8 and 128');

    return false;    
   
  }
 

  let upperChoice = confirm('Would you like upper cases?')
  if(upperChoice){
    userSelection.push(...upperCharacters)
  }

  
  let lowerChoice = confirm('Would you like lower cases?')
  if(lowerChoice){
    userSelection.push(...lowerCharacters)
  }

  
  let specialChoice = confirm('Would you like special characters?')
  if(specialChoice){
    userSelection.push(...specialCharacters)
  }

  
  let numberChoice = confirm('Would you like numbers?')
  if(numberChoice){
    userSelection.push(...numbers)
  }
  console.log('userSelection after: ', userSelection);

  // 4 negative options-prevents user from continuing thru any more prompts
  if (!numberChoice && !specialChoice && !lowerChoice && !upperChoice) {
    userSelection = alert("You must select at least one option in order to generate your password. Please try again by starting over. Click Generate Password button to begin again.");
    
}else {

//Random selection
  for (let i = 0; i < passLength; i++) {
    finalPassword.push(userSelection[Math.floor(Math.random() * userSelection.length)]);

  }
  
  return finalPassword; 
}

}


 
