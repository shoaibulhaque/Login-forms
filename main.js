const sign_in_button = document.querySelector("#sign-in-Btn");
const payorder_btn = document.querySelector("#Payorder-Btn");
const container = document.querySelector(".container");

payorder_btn.addEventListener('click', () => {
  container.classList.add("payorder-mode");
});

sign_in_button.addEventListener('click', () => {
  container.classList.remove("payorder-mode");
});