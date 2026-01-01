const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll(".model-btn");
const closeBtn = document.querySelector(".ok-btn");

function showModel() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}
function closeModel() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", showModel);
}
closeBtn.addEventListener("click", closeModel);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
  }
});
