import { ALL_WORDS } from "./constants.js";

const randomWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
const result = document.getElementById("result");
console.log(randomWord);
let counter = 0;

const paintLetter = (letter, position, className, gameBoard) => {
  const letterBox = gameBoard.children[counter].children[position];
  if (letterBox.classList.contains("green")) return;
  letterBox.classList.add(className);
  letterBox.textContent = letter;
};

const checkWord = (word, gameBoard) => {
  let wordToCheck = "";
  let className;
  for (let index = 0; index < word.length; index++) {
    if (word.charAt(index) === randomWord.charAt(index)) {
      className = "green";
      wordToCheck += "-";
      paintLetter(word[index], index, className, gameBoard);
    } else {
      wordToCheck += randomWord[index];
    }
  }

  for (let index = 0; index < wordToCheck.length; index++) {
    if (wordToCheck.includes(word[index])) {
      className = "yellow";

      paintLetter(word[index], index, className, gameBoard);
    } else {
      className = "gray";
      paintLetter(word[index], index, className, gameBoard);
    }
  }
  console.log(result);
  if (wordToCheck === "-----") {
    result.classList.add("result--show");
    result.textContent = "You Win!";
  }
  if (counter === 4) {
    result.classList.add("result--show");
    result.textContent = "You Lose!";
  } else {
    counter++;
  }
};

const retry = (gameBoard) => {
  let row = 0;
  result.classList.remove("result--show");
  for (let index = 0; index < gameBoard.children.length; index++) {
    gameBoard.children[0].children[index].classList = "letters";
    gameBoard.children[0].children[index].textContent = "";
    gameBoard.children[1].children[index].classList = "letters";
    gameBoard.children[1].children[index].textContent = "";
    gameBoard.children[2].children[index].classList = "letters";
    gameBoard.children[2].children[index].textContent = "";
    gameBoard.children[3].children[index].classList = "letters";
    gameBoard.children[3].children[index].textContent = "";
    gameBoard.children[4].children[index].classList = "letters";
    gameBoard.children[4].children[index].textContent = "";
  }
  counter = 0;
};

export { checkWord as printWord, retry };
