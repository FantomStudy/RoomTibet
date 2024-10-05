const hamb = document.querySelector(".burger");
const list = document.querySelector(".header-list");

hamb.addEventListener("click", () => {
  list.classList.toggle("active");
});
list.addEventListener("click", () => {
  list.classList.toggle("active");
});