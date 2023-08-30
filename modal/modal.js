const modal = document.querySelector(".modal");
const modal_btn = document.querySelector(".modal_btn");
const modal_exit = document.querySelector(".modal_exit");
modal_btn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
});

modal_exit.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  console.log(modal);
});
