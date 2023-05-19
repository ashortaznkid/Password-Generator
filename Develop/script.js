// Assignment Code
var generateBtn = document.querySelector("#generate");


var Numbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
]; 


function questions() {
  var Valid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNumbs = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNumbs: askNumbs,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbs)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    Valid = true;

  } while(!Valid);
  return responses;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
