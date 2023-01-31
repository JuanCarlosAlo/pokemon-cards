let cardsToPlay = 30;
let arrayOfCards = [];
let halfArrayOfCards = [];

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

const createImgCard = (index) => {
  const imgCard = document.createElement("img");
  imgCard.classList.add("card__image");
  imgCard.src = `assets/images/${arrayOfCards[index]}.png`;

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

    cardElement.dataset.card = `card-${arrayOfCards[index]}`;

    const frontCard = createFrontCard();
    const imgCard = createImgCard(index);

    console.log(frontCard);
    frontCard.append(imgCard);
    cardElement.append(frontCard, createBackCard());
    fragment.append(cardElement);
  });

  cardContainer.append(fragment);
};

export { chooseCards, createCards };
