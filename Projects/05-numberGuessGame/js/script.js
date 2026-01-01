// DOM ITEM
const score = document.querySelector(".score");
const hScore = document.querySelector(".hScore");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const btn = document.querySelector(".check");
const number = document.querySelector(".number");
const resetBtn = document.querySelector(".reset");

// Game Variables
let Score = 20;
let HighScore = 0;
let CNumber = Math.trunc(Math.random() * 20 + 1);

btn.addEventListener("click", function () {
  if (Number(guess.value) === CNumber) {
    message.textContent = "Correct";
    HighScore = Score;
    HighScore = HighScore < 10 ? `0${HighScore}` : HighScore;
    hScore.textContent = `High Score : ${HighScore}`;
    number.textContent = CNumber;
  } else if (Number(guess.value) > CNumber) {
    message.textContent = "Your Number is too high!";
    Score--;
    Score = Score < 10 ? `0${Score}` : Score;
    score.textContent = `Score : ${Score}`;
  } else if (Number(guess.value) < CNumber) {
    message.textContent = "Your Number is too low!";
    Score--;
    score.textContent = `Score : ${Score}`;
  }
});
resetBtn.addEventListener("click", function () {
  Score = 20;
  score.textContent = `Score : ${Score}`;
  message.textContent = "Start game...";
  number.textContent = "?";
});
