const countNumber = document.querySelector(".countNumber");
const dec_bt = document.querySelector(".dec_bt");
const reset_bt = document.querySelector(".reset_bt");
const inc_bt = document.querySelector(".inc_bt");

let number = 0;

function setCounterNumber() {
  countNumber.innerHTML = `${number}`;
}

dec_bt.addEventListener("click", function () {
  number -= 1;
  setCounterNumber();
});
reset_bt.addEventListener("click", function () {
  number = 0;
  setCounterNumber();
});
inc_bt.addEventListener("click", function () {
  number += 1;
  setCounterNumber();
});

setCounterNumber();
