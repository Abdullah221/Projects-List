const btn = document.querySelector("#Generator");
const input = document.querySelector("#inputField");
const qrImg = document.querySelector(".qrImg");
const imgContainer = document.querySelector(".img");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

btn.addEventListener("click", function () {
  if (input.value.length > 0) {
    const inputData = input.value;
    imgContainer.classList.remove("hide");
    qrImg.src = api + inputData;
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 500);
  }
});
