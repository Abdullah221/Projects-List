const success = "Success";
const error = "Error";
const invalid = "Invalid";
const toastBox = document.querySelector(".toasts");

function showToast(msg, className) {
  const toast = document.createElement("div");
  toast.classList.add("toast", className);
  toast.innerHTML = `<h3>${msg} Here</h3><p>Your details will be here</p>`;
  toastBox.appendChild(toast);
  setTimeout(() => {
    toastBox.removeChild(toast);
  }, 5000);
}
