let color = [
  "red",
  "blue",
  "yellow",
  "green",
  "gray",
  "purple",
  "cyan",
  "gold",
  "cream",
  "coral",
  "jade",
];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const main = document.getElementById("main");
const bt = document.querySelector(".main-bt");
const mainColor = document.querySelector(".main-color");
const mainText = document.querySelector(".main-color-text");

function random() {
  return Math.floor(Math.random() * color.length);
}

function randomColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[random()];
  }
  return hexColor;
}

document.body.style.backgroundColor = `${randomColor()}`;
mainColor.innerHTML = `Background Color : ${randomColor()}`;

bt.addEventListener("click", function () {
  document.body.style.backgroundColor = `${randomColor()}`;
  mainColor.innerHTML = `Background Color : ${randomColor()}`;
});
