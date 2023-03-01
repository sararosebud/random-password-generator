var characterLength = 8;
var choiceArr = [];

var specialArr = ['!','@','#','$','%','^','&','*','(',')'];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = lowerCharacters.toUpperCase();
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];







// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //either true or false
  var passwordText = document.querySelector("#password");


  //conditional statement that will run thru code only if the correct prompts and criteria are met
   if(correctPrompts) {

    var newPassword = generatePassword();

  passwordText.value = newPassword;

    } else {
      passwordText.value = "";

    }


}

function generatePassword() {}
  var password = "";
  for(var i=0; i <characterLength; i++){
    var randomIndex = Math.floor(math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
 
  
{


}

function getPrompts(){
  characterLength = [];

  characterLength = parseInt(prompt("How many characters to you want your passowrd to be? (8 minimum, 128 maximum"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return false;

  let num;

    do {
      num = prompt("Enter a number greater than 100?", 0);
      } while (num <= 8 && num);
  }

  if(confirm("Do you want lowercase letters? Yes=Click Ok No=Click Cancel")) {
    choiceArr = choiceArr.concat(lowerCharacters);
  }

  if(confirm("Do you want uppercase letters? Yes=Click Ok No=Click Cancel")) {
    choiceArr = choiceArr.concat(upperCharacters);
  }

  if(confirm("Do you want special characters? Yes=Click Ok No=Click Cancel")) {
    choiceArr = choiceArr.concat(specialCharacters);
  }

  if(confirm("Do you want numbers? Yes=Click Ok No=Click Cancel")) {
    choiceArr = choiceArr.concat(numbers);
  }

  return true;

  }

