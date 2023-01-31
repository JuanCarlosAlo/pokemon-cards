import { cardsToPlay } from '../js/chooseCards.js';

const cards = document.querySelectorAll('.card');
const playerScore = document.getElementById('player-score');
const playerCombo = document.getElementById('player-combo');
const retry = document.getElementById('retry');
let cardSelected;
let cardCompared;
let score = 0;
let canPlay = true;
let combo = 0;
let allCardsRotated = 0;

const rotateCard = card => {
  cards.forEach(cardElement => {
    cardElement.classList.add('card--show');
  });
  const timeoutId = setTimeout(() => {
    cards.forEach(cardElement => {
      cardElement.classList.remove('card--show');
      clearTimeout(timeoutId);
    });
  }, 2000);
};

const compareCards = () => {
  if (cardSelected.dataset.card === cardCompared.dataset.card) {
    score++;
    combo++;
    allCardsRotated += 2;
    console.log(playerScore);
  } else {
    combo = 0;
    cardSelected.classList.remove('card--show');
    cardCompared.classList.remove('card--show');
  }
  playerScore.textContent = score * combo;
  playerCombo.textContent = 'x' + (Number(combo) + 1);
  cardCompared = undefined;
  cardSelected = undefined;
  canPlay = true;
  console.log(allCardsRotated, cardsToPlay);
  if (allCardsRotated === cardsToPlay) {
    retryUnhide();
  }
};

const retryUnhide = () => {
  retry.style.display = 'flex';
};
const retryHide = () => {
  retry.style.display = 'none';
};

const setCards = clickedCard => {
  if (!cardSelected) {
    cardSelected = clickedCard;
    cardSelected.classList.add('card--show');
  } else {
    canPlay = false;
    cardCompared = clickedCard;
    cardCompared.classList.add('card--show');
    clickedCard.addEventListener(
      'transitionend',
      () => {
        if (cardSelected && cardCompared) {
          compareCards();
        }
      },
      { once: true }
    );
  }
};

export { rotateCard, setCards, canPlay, retry, retryHide };
