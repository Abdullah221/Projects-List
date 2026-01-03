// Data from LocalStorage
const playerNames = JSON.parse(localStorage.getItem("players"));

// Dom Elements:
const playerName = document.querySelectorAll(".playerName");
const dPlayerScore = document.querySelectorAll(".player-score");
const dCurrentScore = document.querySelectorAll(".current-score");
const dice = document.querySelector(".dice");
const playerProfile = document.querySelectorAll(".player");

// Game Variable
let scores = [0, 0];
let currentScore = [0, 0];

// Rendering Player Names
for (let i = 0; i < playerNames.length; i++) {
  playerName[i].textContent = playerNames[i];
  dPlayerScore[i].textContent = scores[i];
}

// Initializing player
let activePlayer = 0;
playerProfile[activePlayer].classList.add("active-player");

// Rolling Dice
function rollDice() {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  dice.classList.contains("hide") ? dice.classList.remove("hide") : " ";
  dice.src = `./assets/Dice-${diceNumber}.png`;

  if (diceNumber > 1) {
    currentScore[activePlayer] += diceNumber;
    dCurrentScore[activePlayer].textContent = currentScore[activePlayer];
  } else {
    currentScore[activePlayer] = 0;
    dCurrentScore[activePlayer].textContent = currentScore[activePlayer];
    playerSwap();
  }

  console.log(diceNumber);
}

function playerSwap() {
  playerProfile[activePlayer].classList.remove("active-player");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  playerProfile[activePlayer].classList.add("active-player");
}

// Holding the Number
function holdNumber() {
  scores[activePlayer] += currentScore[activePlayer];
  dPlayerScore[activePlayer].textContent = scores[activePlayer];
  currentScore[activePlayer] = 0;
  dCurrentScore[activePlayer].textContent = currentScore[activePlayer];
  if (scores[activePlayer] >= 100) {
    newGame();
    alert(`${playerNames[activePlayer]} Wins`);
  }
  playerSwap();
}
// New Game
function newGame() {
  dice.classList.add("hide");
  scores = [0, 0];
  currentScore = [0, 0];
  // Assigning Reset Values through loop for each player
  for (let i = 0; i < playerNames.length; i++) {
    dPlayerScore[i].textContent = scores[i];
    dCurrentScore[i].textContent = currentScore[i];
  }
}

// Dark Mode Components
const body = document.querySelector("body");
const modeButton = document.querySelector("#modeButton");

// Dark Mode
function darkMode() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    modeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    body.classList.add("dark");
    modeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
}
