const exit = document.querySelector(".exit");
const list = document.querySelector(".list");
const container = document.querySelector("#sidebar_container");

exit.addEventListener("click", function () {
  container.classList.add("end");
});
list.addEventListener("click", function () {
  container.classList.remove("end");
});
