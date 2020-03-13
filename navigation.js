const btn = document.querySelector(".home__btn"),
  gradient = document.querySelector(".home__gradient"),
  list = document.querySelector(".home__list"),
  logo = document.querySelector(".home__logo");
let menuActive = !1;
btn.addEventListener("click", () => {
  menuActive
    ? (btn.classList.remove("active"),
      gradient.classList.remove("active"),
      list.classList.remove("active"),
      logo.classList.remove("active"),
      (menuActive = !1))
    : (btn.classList.add("active"),
      gradient.classList.add("active"),
      list.classList.add("active"),
      logo.classList.add("active"),
      (menuActive = !0));
}),
  list.addEventListener("click", () => {
    btn.classList.remove("active"),
      gradient.classList.remove("active"),
      list.classList.remove("active"),
      logo.classList.remove("active"),
      (menuActive = !1);
  });
