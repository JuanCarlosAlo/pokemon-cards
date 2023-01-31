// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import {
  rotateCard,
  setCards,
  canPlay,
  retry,
  retryHide,
} from "../js/cardRotate.js";
import {
  chooseCards,
  createCards,
  shuffle,
  arrayOfCards,
} from "../js/chooseCards.js";
const cardContainer = document.getElementById("card");

rotateCard();
chooseCards();
shuffle(arrayOfCards);
createCards(cardContainer);

cardContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("card") || canPlay === false) {
    return;
  }
  console.log(e.target);
  setCards(e.target);
});

retry.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  rotateCard();
  chooseCards();
  shuffle(arrayOfCards);
  createCards(cardContainer);
  retryHide();
});
