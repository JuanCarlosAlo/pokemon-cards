const cards = document.querySelectorAll('.card');
let cardSelected;
let cardCompared;

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
    console.log('win');
  } else {
    cardSelected.classList.remove('card--show');
    cardCompared.classList.remove('card--show');
    console.log('you loose');
  }
  cardCompared = '';
  cardSelected = '';
};

const setCards = clickedCard => {
  if (!cardSelected) {
    cardSelected = clickedCard;
    cardSelected.classList.add('card--show');
  } else {
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

export { rotateCard, setCards };
