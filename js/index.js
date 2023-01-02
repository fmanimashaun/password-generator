// get DOM elements
const generateBtn = document.querySelector(".password__generate-btn");
const firstPassword = document.querySelector("#password1");
const secondPassword = document.querySelector("#password2");
const inputLabelCollection = document.querySelectorAll(".password__input-label");

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

// add event listener to the generate button
generateBtn.addEventListener("click", () => {
  generatePassword(firstPassword, 15);
  generatePassword(secondPassword, 15);
});

// create a copy to clipboard function
async function copyOnClick (input) {
    try {
      await navigator.clipboard.writeText(input.value);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
}

firstPassword.addEventListener("click", () => {
  if (firstPassword.value !== "") {
    copyOnClick(firstPassword);
    const label = firstPassword.parentElement

    // add the copied and nohaver class to the label
    label.classList.add('copied', 'nohover');

    // remove the copied class after 500ms
    setTimeout(function () {
      label.classList.remove('copied');
    }, 500);

    // remove the nohover class after 1000ms
    setTimeout(function () {
      label.classList.remove('nohover');
    }, 1000);
  }
});

secondPassword.addEventListener("click", () => {
  if (secondPassword.value !== "") {
    copyOnClick(secondPassword);
    const label = secondPassword.parentElement

    // add the copied and nohaver class to the label
    label.classList.add('copied', 'nohover');

    // remove the copied class after 500ms
    setTimeout(function () {
      label.classList.remove('copied');
    }, 500);

    // remove the nohover class after 1000ms
    setTimeout(function () {
      label.classList.remove('nohover');
    }, 1000);
  }
});


