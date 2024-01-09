// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to have? (Enter a number between 8 to 128)"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return null;
  }

  var includeSpecialChars = confirm("Include special characters?");
  var includeNumericChars = confirm("Include numbers?");
  var includeLowercaseChars = confirm("Include lowercase letters?");
  var includeUppercaseChars = confirm("Include uppercase letters?");

  if (!includeSpecialChars && !includeNumericChars && !includeLowercaseChars && !includeUppercaseChars) {
    alert("Select at least one character type.");
    return null;
  }

  return {
    length: length,
    includeSpecialChars: includeSpecialChars,
    includeNumericChars: includeNumericChars,
    includeLowercaseChars: includeLowercaseChars,
    includeUppercaseChars: includeUppercaseChars
  };
}

// Function to pick a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return '';

  var availableChars = [];
  var generatedPassword = '';

  if (options.includeSpecialChars) {
    availableChars = availableChars.concat(specialCharacters);
  }
  if (options.includeNumericChars) {
    availableChars = availableChars.concat(numericCharacters);
  }
  if (options.includeLowercaseChars) {
    availableChars = availableChars.concat(lowerCasedCharacters);
  }
  if (options.includeUppercaseChars) {
    availableChars = availableChars.concat(upperCasedCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(availableChars);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}
// Get the generate button element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
