// get DOM elements
const generateBtn = document.querySelector(".password__generate-btn");
const firstPassword = document.querySelector("#password1");
const secondPassword = document.querySelector("#password2");

// set the intial vlaues to nothing
firstPassword.value = "";
secondPassword.value = "";

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

// create a random character generator function
const generateRandomCharacter = () => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// create a random password generator function
const generatePassword = (element, n) => {
  let password = "";
  for (let i = 0; i < n; i++) {
    password += generateRandomCharacter();
  }
  element.value = password;
}

