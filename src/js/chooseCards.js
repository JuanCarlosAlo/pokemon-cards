let cardsToPlay = 4;
let arrayOfCards = [];
let halfArrayOfCards = [];
let newArray;

const chooseCards = () => {
  if (halfArrayOfCards.length >= cardsToPlay / 2) return;
  const randomCards = Math.floor(Math.random() * 151);
  if (
    !halfArrayOfCards.includes(randomCards) &&
    !halfArrayOfCards.includes(0)
  ) {
    halfArrayOfCards.push(randomCards);
  }
  arrayOfCards = [...halfArrayOfCards, ...halfArrayOfCards];

  return chooseCards(arrayOfCards);
};
const shuffle = (array) => {
  newArray = [...array];
  for (let i = newArray.length - 1, r; i; i--) {
    r = Math.floor(Math.random() * i);
    [newArray[i], newArray[r]] = [newArray[r], newArray[i]];
  }
  return newArray;
};

const createImgCard = (index) => {
  const imgCard = document.createElement("img");
  imgCard.classList.add("card__image");
  imgCard.src = `assets/images/${newArray[index]}.png`;

  return imgCard;
};

const createBackCard = () => {
  const cardBack = document.createElement("div");
  cardBack.classList.add("card__back");
  return cardBack;
};

const createFrontCard = () => {
  const cardFront = document.createElement("div");
  cardFront.classList.add("card__front");

  return cardFront;
};

const createCards = (cardContainer) => {
  const fragment = document.createDocumentFragment();
  arrayOfCards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.dataset.card = `card-${newArray[index]}`;
    console.log(cardElement.dataset.card, cardElement);
    const frontCard = createFrontCard();
    const imgCard = createImgCard(index);

    frontCard.append(imgCard);
    cardElement.append(frontCard, createBackCard());
    fragment.append(cardElement);
  });

  cardContainer.append(fragment);
};

export { chooseCards, createCards, cardsToPlay, shuffle, arrayOfCards };
