const countNumber = document.querySelector(".countNumber");
const dec_bt = document.querySelector(".dec_bt");
const reset_bt = document.querySelector(".reset_bt");
const inc_bt = document.querySelector(".inc_bt");

let number = 0;

function changeColor() {
  if (number < 0) {
    countNumber.style.color = "red";
  } else if (number === 0) {
    countNumber.style.color = "black";
  } else {
    countNumber.style.color = "green";
  }
}

function setCounterNumber(num) {
  if (num !== 0) {
    number = number + num;
    countNumber.innerHTML = number;
    changeColor();
  } else {
    number = 0;
    countNumber.innerHTML = number;
    changeColor();
  }
}

dec_bt.addEventListener("click", () => setCounterNumber(-1));
reset_bt.addEventListener("click", () => setCounterNumber(0));
inc_bt.addEventListener("click", () => setCounterNumber(1));
