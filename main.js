const buttonStart = document.querySelector(".button__start");
const containerElement = document.querySelector(".container");
const container__gameElement = document.querySelector(".container__game");

const buttonGreater = document.querySelector(".button__greater");
const buttonSmaller = document.querySelector(".button__smaller");
const card1 = document.querySelector(".card2");
const card2 = document.querySelector(".card2");

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
  for (let positionSuit = 0; positionSuit < cardSuit.length; positionSuit++) {
    for (
      let positionValue = 0;
      positionValue < cardValue.length;
      positionValue++
    ) {
      let suit = cardSuit[positionSuit];
      let value = cardValue[positionValue];
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

const showNewCard = (cardDeck) => {
  card2.style.backgroundColor = "blue";
  card2.textContent = getRandomCard(cardDeck);
};

buttonStart.addEventListener("click", function () {
  containerElement.classList.add("hidden");
  container__gameElement.classList.remove("hidden");
});

buttonGreater.addEventListener("click", showNewCard);
