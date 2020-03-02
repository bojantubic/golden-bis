const btn = document.querySelector(".home__btn");
const gradient = document.querySelector(".home__gradient");
const list = document.querySelector(".home__list");
const logo = document.querySelector(".home__logo");
let menuActive = false;

btn.addEventListener("click", () => {
  if (!menuActive) {
    btn.classList.add("active");
    gradient.classList.add("active");
    list.classList.add("active");
    logo.classList.add("active");
    menuActive = true;
  } else {
    btn.classList.remove("active");
    gradient.classList.remove("active");
    list.classList.remove("active");
    logo.classList.remove("active");
    menuActive = false;
  }
});

list.addEventListener("click", () => {
  btn.classList.remove("active");
  gradient.classList.remove("active");
  list.classList.remove("active");
  logo.classList.remove("active");
  menuActive = false;
});
