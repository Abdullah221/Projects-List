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

// Input Fields
const player1 = document.querySelector("#player-1");
const player2 = document.querySelector("#player-2");
const submit = document.querySelector("#submit");
const message = document.querySelector(".message");

// Function for next page
function goToGame(playerNameAr) {
  localStorage.clear();
  localStorage.setItem("players", JSON.stringify(playerNameAr));
  window.location.href = "./pigGame.html";
}

// Form Handling
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const playerName = [player1.value, player2.value];
  console.log(playerName[0], playerName[1]);
  if (playerName[0] && playerName[1]) {
    goToGame(playerName);
  } else {
    message.textContent = "Enter Players Name";
    message.classList.remove("hide");
    setTimeout(() => {
      if (!playerName[0] && !playerName[1]) {
        player1.classList.add("error");
        player2.classList.add("error");
      } else {
        !playerName[0]
          ? player1.classList.add("error")
          : player2.classList.add("error");
      }
      setTimeout(() => {
        player1.classList.remove("error");
        player2.classList.remove("error");
      }, 2000);
    });
  }
});
