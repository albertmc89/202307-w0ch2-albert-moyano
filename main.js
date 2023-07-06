const buttonStart = document.querySelector(".button__start");
const containerElement = document.querySelector(".container");
const container__gameElement = document.querySelector(".container__game");
const displayWinElement = document.querySelector(".display__result__win");
const displayLoseElement = document.querySelector(".display__result__lose");
const displayInfoElement = document.querySelector(".display__info");

const buttonGreater = document.querySelector(".button__greater");
const buttonSmaller = document.querySelector(".button__smaller");
const card1Element = document.querySelector(".card1");
const card2Element = document.querySelector(".card2");

const generateDeckCards = () => {
  const cardSuit = ["♥️", "♠️", "♦️", "♣️"];
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
  for (
    let positionValue = 0;
    positionValue < cardValue.length;
    positionValue++
  ) {
    for (let positionSuit = 0; positionSuit < cardSuit.length; positionSuit++) {
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

  return randomCard;
};

const playGame = () => {
  const deckToPlay = generateDeckCards();
  let randomCard = getRandomCard(deckToPlay);
  let randomCardToGuess = getRandomCard(deckToPlay);
  // console.log(randomCard);
  // console.log(randomCardToGuess);
  // console.log(deckToPlay);
  const setRound = () => {
    randomCard = getRandomCard(deckToPlay);
    randomCardToGuess = getRandomCard(deckToPlay);
    buttonSmaller.disabled = false;
    buttonGreater.disabled = false;
    card2Element.textContent = "";
    card1Element.textContent = randomCard;
    displayLoseElement.classList.add("hidden");
    displayWinElement.classList.add("hidden");
    displayInfoElement.classList.remove("hidden");
  };

  buttonStart.addEventListener("click", function () {
    card1Element.textContent = randomCard;
    containerElement.classList.add("hidden");
    container__gameElement.classList.remove("hidden");
  });

  buttonGreater.addEventListener("click", function () {
    card2Element.textContent = randomCardToGuess;
    buttonSmaller.disabled = true;
    buttonGreater.disabled = true;
    if (
      deckToPlay.indexOf(randomCard) < deckToPlay.indexOf(randomCardToGuess)
    ) {
      displayWinElement.classList.remove("hidden");
      displayInfoElement.classList.add("hidden");
    } else if (
      deckToPlay.indexOf(randomCard) >= deckToPlay.indexOf(randomCardToGuess)
    ) {
      displayLoseElement.classList.remove("hidden");
      displayInfoElement.classList.add("hidden");
    }
    setTimeout(setRound, 2000);
  });

  buttonSmaller.addEventListener("click", function () {
    card2Element.textContent = randomCardToGuess;
    buttonSmaller.disabled = true;
    buttonGreater.disabled = true;
    if (
      deckToPlay.indexOf(randomCard) > deckToPlay.indexOf(randomCardToGuess)
    ) {
      displayWinElement.classList.remove("hidden");
      displayInfoElement.classList.add("hidden");
    }
    if (
      deckToPlay.indexOf(randomCard) <= deckToPlay.indexOf(randomCardToGuess)
    ) {
      displayLoseElement.classList.remove("hidden");
      displayInfoElement.classList.add("hidden");
    }
    setTimeout(setRound, 2000);
  });
};

playGame();
