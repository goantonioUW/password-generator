// Assignment Code
var generateBtn = document.querySelector("#generate");

var copyBtn = document.querySelector("#copy");
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "%",
  "#",
  "!",
  "&",
  "$",
  "-",
  "*",
  "+",
  ",",
  "(",
  ":",
  ";",
  ")",
  "<",
  "@",
  "?",
  "[",
  "=",
  "]",
  "|",
  "`",
  "{",
  "^",
  "}",
  "~",
  "/",
  "_",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let userPassword = [];

//list password variables upperCase
function generatePassword() {
  userPassword = [];
  const passwordLength = userLength();
  if (passwordLength !== undefined) {
    userUppercase();
    userLowercase();
    userSepcialChar();
    userNumbers();
    randomPassword(passwordLength);
  }
}
//create a textarea for desired password length
function userLength() {
  const passwordLength = prompt("Please enter a password length.");

  //Change the passwordLength to greater than 7 so that 8 is accepted as the min length
  if (passwordLength > 7 && passwordLength < 128) {
    document.getElementById("userLength").innerHTML =
      "You chose a password length of " + passwordLength;
    return passwordLength;
  }
  // another if statement for an alert
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password length between 8 and 128 characters.");
    return;
  }
  if (passwordLength === null) {
    return;
  }
}

function userUppercase() {
  var upperCaseConfirm = confirm("Would you like to use UPPERCASE?");
  //if yes add upperCase to userpassword
  if (upperCaseConfirm === true) userPassword = [...userPassword, ...upperCase];
}

function userLowercase() {
  var lowerCaseConfirm = confirm("Would you like to use LowerCASE?");
  //if yes add LowerCase to userpassword
  if (lowerCaseConfirm === true) userPassword = [...userPassword, ...lowerCase];
}

function userSepcialChar() {
  var specialCharConfirm = confirm("Would you like to use Special Characters?");
  //if yes add upperCase to userpassword
  if (specialCharConfirm === true)
    userPassword = [...userPassword, ...specialChar];
}

function userNumbers() {
  var numbersConfirm = confirm("Would you like to use Numbers?");
  //if yes add upperCase to userpassword
  if (numbersConfirm === true) userPassword = [...userPassword, ...numbers];
  console.log(userPassword);
}

//create a function to randomize userpassword

function randomPassword(length) {
  if (userPassword.length === 0) {
    alert("Please select 1 of the 4 options.");
    return;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChars =
      userPassword[Math.floor(Math.random() * userPassword.length)];
    password += randomChars;
  }
  console.log(password);
  // display password to the page
  const displayPassword = document.querySelector("#password");
  displayPassword.innerHTML = password;

  // const previous = document.querySelector("lastPasswords");
  // previous.innerHTML = lastPasswords;
}

// function copy() {
//   var copyText = document.querySelector("password");
//   copyText.select();
//   console.log(select);
//   copyText.setSelectionRange(0, 128);
//   document.execCommand("copy");
//   alert("Your password has been copied to the cipboard");
// }
