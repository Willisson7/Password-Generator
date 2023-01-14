// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
//Password Length
var length = Number(prompt("Enter your desired password length between 8-128 characters."));
//Character Type
var charType= prompt("What would you like your password to be comprised of? Please enter at least 2 of the following: 'uppercase, lowercase, symbols, numbers'. ");

  passwordText.value = password(length, charType);

  function password(length, charType) {
    var charGen = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols:'!@#$%^&*()-_=+',
    };
    // Parse user input
    var charTypes = charType.toLowerCase().split(',');
    charSet = "";
    
    for(var i = 0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i].trim()];
    }
    console.log(charSet);

    var returnValue = "";

    for (var i = 0; i < length; i++) {
      returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
     }
     return returnValue;
    }

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function copyPassword() {
//   document.getElementById("password").select();
//   navigator.clipboard.writeText(copyText.value);
//   alert("Password copied to clipboard!" + copyText.value);
// }


// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function generatePassword() {
//   var password = " ";
//   var passwordText = document.querySelector("#password");
//   var chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var passwordLength = 16;


//   for (var i = 0; i < passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber + 1);
//   }

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);
