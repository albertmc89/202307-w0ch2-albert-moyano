const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardSuit = ["hearts", "spades", "diamonds", "clubs"];

getRandomCard = () => {
  const randomValue = Math.floor(Math.random() * cardValue.length);
  const randomSuit = Math.floor(Math.random() * cardSuit.length);
  const randomCard = `${cardValue[randomValue]} ${cardSuit[randomSuit]}`;

  return `Esta es la carta generada aleatoriamente: ${randomCard}`;
};
getRandomCard();
