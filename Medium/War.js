const n = parseInt(readline()); // the number of cards for player 1
const player1Deck = [];
const player2Deck = [];
const player1WarDeck = [];
const player2WarDeck = [];

for (let i = 0; i < n; i++) {
  const cardp1 = readline(); // the n cards of player 1
  player1Deck[i] = cardp1;
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
  const cardp2 = readline(); // the m cards of player 2
  player2Deck[i] = cardp2;
}

/*
 * Returns the value of the card
 * Card format example: 3D = 3 of diamonds
 */
function decodeCard(card) {
  let value;

  if (card[0] == "A") {
    value = 14;
  } else if (card[0] == "K") {
    value = 13;
  } else if (card[0] == "Q") {
    value = 12;
  } else if (card[0] == "J") {
    value = 11;
  } else {
    value = parseInt(card[0], 10);
  }

  return value;
}

/*
 * Rules: each player throws 1 card
 * The player that gets the higher value gets both cards
 * Put the cards from player1 into the deck first then the cards from player2
 */
function battle(player1Card, player2Card) {
  let player1Value = decodeCard(player1Card);
  let player2Value = decodeCard(player2Card);

  if (player1Value > player2Value) {
    player1Deck.push(player1Card);
    player1Deck.push(player2Card);
  } else if (player2Value > player1Value) {
    player2Deck.push(player1Card);
    player2Deck.push(player2Card);
  } else {
    for (let i = 0; i < 3; i++) {
      player1WarDeck.push(player1Deck.shift());
      player2WarDeck.push(player2Deck.shift());
    }
    player1WarDeck.push(player1Card);
    player2WarDeck.push(player2Card);
    war();
  }
}

/*
 * Rules: each player throws 3 cards
 * Happens when both players draws the same card (value)
 * Battle with each cards about who wins the war
 * The player that wins gets all 6 cards
 * Put the cards from player1 into the deck first then the cards from player2
 */
function war() {
  let player1Value = decodeCard(player1WarDeck[0]);
  let player2Value = decodeCard(player2WarDeck[0]);

  if (player1Value > player2Value) {
    while (player1WarDeck.length) {
      player1Deck.push(player1WarDeck.shift());
    }

    while (player2WarDeck.length) {
      player1Deck.push(player2WarDeck.shift());
    }
  } else if (player2Value > player1Value) {
    while (player1WarDeck.length) {
      player2Deck.push(player1WarDeck.shift());
    }

    while (player2WarDeck.length) {
      player2Deck.push(player2WarDeck.shift());
    }
  } else {
    console.error("Equal", player1Deck);
    for (let i = 0; i < 3; i++) {
      player1WarDeck.push(player1Deck.shift());
      player2WarDeck.push(player2Deck.shift());
    }
    war();
  }
}

// Game loop
let isPlaying = true;
let amountOfRounds = 0;
let winner;

while (isPlaying) {
  let player1Card = player1Deck.shift();
  let player2Card = player2Deck.shift();
  battle(player1Card, player2Card);

  // End of round calculating
  amountOfRounds++;
  if (player1Deck.length === 0 || player2Deck.length === 0) {
    isPlaying = false;
    if (player1Deck.length === 0) {
      winner = 2;
    } else {
      winner = 1;
    }
  }
}

// Answer format: 1 = player1, 2 = player2, PAT = Equal followed by number of rounds
// Example: Console.log("1 3")

console.log(`${winner} ${amountOfRounds}`);
