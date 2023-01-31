// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  rotateCard,
  setCards,
  canPlay,
  retry,
  retryHide
} from '../js/cardRotate.js';
import { chooseCards, createCards } from '../js/chooseCards.js';
const cardContainer = document.getElementById('card');

rotateCard();
chooseCards();
createCards(cardContainer);

cardContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('card') || canPlay === false) {
    return;
  }
  setCards(e.target);
});

retry.addEventListener('click', () => {
  cardContainer.innerHTML = '';
  rotateCard();
  chooseCards();
  createCards(cardContainer);
  retryHide();
});
