const nav_menus = document.querySelector(".nav_menus");
const list = document.querySelector(".list");
const nav_container = document.querySelector(".nav_container");

list.addEventListener("click", function () {
  nav_container.classList.toggle("hidden");
});
