// DOM ITEM
const score = document.querySelector(".score");
const hScore = document.querySelector(".hScore");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const btn = document.querySelector(".check");
const number = document.querySelector(".number");
const resetBtn = document.querySelector(".reset");
const body = document.querySelector("body");

// Game Variables
let Score = 20;
let HighScore = 0;
let CNumber = Math.trunc(Math.random() * 20 + 1);

function scoreChecker(messageA) {
  if (Score > 1) {
    message.textContent = `Your Number is ${messageA}`;
    Score--;
    score.textContent = `Score : ${Score}`;
  } else {
    Score = 0;
    message.textContent = "You Lost the game";
    score.textContent = `Score : ${Score}`;
    btn.classList.add("disable");
  }
}
btn.addEventListener("click", function () {
  if (Number(guess.value) === CNumber) {
    message.textContent = "Correct";
    HighScore = Score;
    HighScore = HighScore < 10 ? `0${HighScore}` : HighScore;
    hScore.textContent = `High Score : ${HighScore}`;
    number.textContent = CNumber;
    body.style.backgroundColor = "#8f8";
  } else if (Number(guess.value) > CNumber) {
    scoreChecker("too high!");
  } else if (Number(guess.value) < CNumber) {
    scoreChecker("too low!");
  }
});
resetBtn.addEventListener("click", function () {
  Score = 20;
  score.textContent = `Score : ${Score}`;
  message.textContent = "Start game...";
  number.textContent = "?";
  body.style.backgroundColor = "#212121";
  CNumber = Math.trunc(Math.random() * 20 + 1);
  btn.classList.remove("disable");
});
