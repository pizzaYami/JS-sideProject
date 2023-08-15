const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const main = document.querySelector(".main");
const bt = document.querySelector(".main-bt");
const mainColor = document.querySelector(".main-color");
const mainText = document.querySelector(".main-color-text");

function random() {
  return Math.floor(Math.random() * 10);
}

function randomColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[random()];
  }
  return hexColor;
}

function setMainColor() {
  document.body.style.backgroundColor = `${randomColor()}`;
  mainColor.innerHTML = `Background Color : ${randomColor()}`;
}

setMainColor();

bt.addEventListener("click", setMainColor);
