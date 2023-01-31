// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { rotateCard, setCards } from "../js/cardRotate.js";
import { chooseCards, createCards } from "../js/chooseCards.js";
const cardContainer = document.getElementById("card");

rotateCard();
chooseCards();
createCards(cardContainer);

cardContainer.addEventListener("click", (e) => {
  setCards(e.target);
});
