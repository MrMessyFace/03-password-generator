// Assignment Code
var generateBtn = document.querySelector("#generate");

var enterLimit = "";
var confirmSpecial;
var confirmNumeric;
var confirmLowercase;
var confirmUppercase;

special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  // Ask the user to choose a character limit for the password.
  var enterLimit = parseFloat(prompt("How many characters would you like your password to contain?"));
  // If they first press cancel.
  if (!enterLimit) {
    alert("This needs a value!");
    var enterLimit = parseFloat(prompt("How many characters would you like your password to contain?"));
  };

  // If they choose outside the limit.
  if (enterLimit < 8 || enterLimit > 128) {
    var enterLimit = parseFloat(prompt("You must choose between 8 and 128."));
  };
  // If they choose inside the limit.
  if (enterLimit < 8 || enterLimit > 128) {
    var enterLimit;
  } else {
    var confirmSpecial = confirm("Click OK to confirm including special characters.")
    var confirmNumeric = confirm("Click OK to confirm including numeric characters.");
    var confirmLowercase = confirm("Click OK to confirm including lowercase characters.");
    var confirmUppercase = confirm("Click OK to confirm including uppercase characters.");
  };
  
  // Choices accesses the arrays.
  var choices = [];

  // If Special is chosen.
  if (confirmSpecial) {
    choices = choices.concat(special)
  }
  // If Numeric is chosen.
  if (confirmNumeric) {
    choices = choices.concat(numeric)
  }
  // If Lowercase is chosen.
  if (confirmLowercase) {
    choices = choices.concat(lowercase)
  }
  // If Uppercase is chosen.
  if (confirmUppercase) {
    choices = choices.concat(uppercase)
  }
  // If none of the choices are chosen.
  if (!confirmSpecial && !confirmNumeric && !confirmLowercase && !confirmUppercase) {
    alert("You must choose at least one parameter.");
    return "";
  }

  var randomPassword = "";

  for (var i = 0; i < enterLimit; i++) {
    randomPassword = randomPassword + choices[Math.floor(Math.random() * choices.length)];
}
return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (passwordText.value = password) {
    setTime();
  };
  if (randomPassword === "") {
    
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Added a countdown to erase the password so nobody can also see the password after 10 seconds.
var timerEl = document.querySelector(".timer");
var secondsLeft = 11;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds until your randomly generated password is deleted.";
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      clearPassword();
    }
  }, 1000);
}

function clearPassword() {
  var password = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  timerEl.textContent = " ";
}
