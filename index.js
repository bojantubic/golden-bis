// NAVIGATION
const btn = document.querySelector(".home__btn");
const gradient = document.querySelector(".home__gradient");
const list = document.querySelector(".home__list");
const logo = document.querySelector(".home__logo");
let menuActive = !1;

btn.addEventListener("click", () => {
  menuActive ? (btn.classList.remove("active"), gradient.classList.remove("active"), list.classList.remove("active"), logo.classList.remove("active"), (menuActive = !1)) : (btn.classList.add("active"), gradient.classList.add("active"), list.classList.add("active"), logo.classList.add("active"), (menuActive = !0));
}),
  list.addEventListener("click", () => {
    btn.classList.remove("active"), gradient.classList.remove("active"), list.classList.remove("active"), logo.classList.remove("active"), (menuActive = !1);
  });

// PRELOADER
var images = [];
function preload() {
  for (i = 0; i < preload.arguments.length; i++) (images[i] = new Image()), (images[i].src = preload.arguments[i]);
}
preload("img/img-1.png", "img/img-2.png", "img/img-3.png", "img/img-4.png", "img/img-5.png", "img/img-6.png", "img/img-7.png", "img/img-8.png", "img/img-9.png");
