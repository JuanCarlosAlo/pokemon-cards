// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { rotateCard, setCards } from '../js/cardRotate.js';
const card = document.getElementById('card');

rotateCard();

card.addEventListener('click', e => {
  setCards(e.target);
});
