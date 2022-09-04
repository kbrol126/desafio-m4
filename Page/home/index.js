function main() {
  var headerEl = document.querySelector(".container__home__header");
  headerEl.appendChild(importHeaderComponent());
  var formEl = document.querySelector(".form-section");
  formEl.appendChild(importFormComponent());
  var footerEl = document.querySelector(".footer-section");
  footerEl.appendChild(importFooterComponent());

  var botonEl = document.querySelectorAll(".header__button-hamburger");
  var ventanaEl = document.querySelector(".header__nav__ventana");

  botonEl[0].addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });
  botonEl[1].addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });
  botonEl[2].addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });
}
main();
