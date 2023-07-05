const generateDeckCards = () => {
  const cardSuit = ["hearts", "spades", "diamonds", "clubs"];
  const cardValue = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let cardDeck = [];
  for (let i = 0; i < cardSuit.length; i++) {
    for (let j = 0; j < cardValue.length; j++) {
      let suit = cardSuit[i];
      let value = cardValue[j];
      let card = `${value} ${suit}`;
      cardDeck.push(card);
    }
  }
  return cardDeck;
};

const getRandomCard = (cardDeck) => {
  const randomValue = Math.floor(Math.random() * cardDeck.length);
  const randomCard = `${cardDeck[randomValue]}`;

  return `Esta es la carta generada aleatoriamente: ${randomCard}`;
};

const playGame = () => {
  const deckToPlay = generateDeckCards();
  const randomCard = getRandomCard(deckToPlay);
  console.log(randomCard);
};
playGame();
