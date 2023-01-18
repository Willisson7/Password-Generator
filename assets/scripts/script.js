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

//Pass user input into a function
  function password(length, charType) {
    var charGen = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols:'!@#$%^&*()-_=+',
    };
    // Parse user input into an object variable. Convert userinput to lowercase to match predetermined variable names.
    var charTypes = charType.toLowerCase().split(',');
    charSet = "";
    
  // Determine which categories were selected by User.
    for(var i = 0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i].trim()];
    }

    //Logs the value of User Input "numbers, symbols, uppercase, lowercase".
    console.log(charSet);

    // Establish variable to store result of next loop
    var returnPassword = "";

    // Loop created to randomly select/generate a characeter "x" amount of times according to user input.
    for (var i = 0; i < length; i++) {
      returnPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
     }
     return returnPassword;
    }

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);