const rootStyles = document.documentElement.style;
let wordLength = 5;
let rowLength = 5;

const createBoard = (gameBoard) => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < rowLength; index++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("game-board__row");
    fragment.append(rowContainer);
    for (let index = 0; index < wordLength; index++) {
      const letterBox = document.createElement("div");
      letterBox.classList.add("letters");
      rowContainer.append(letterBox);
    }
  }

  gameBoard.append(fragment);
};

export { createBoard };
