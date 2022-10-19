function main() {
  let headerEl = document.querySelector("header");
  headerEl.appendChild(importHeaderComponent());
  let footerEl = document.querySelector("footer");
  footerEl.appendChild(importFooterComponent());
  let formEl = document.querySelector(".contact-forms");
  formEl.appendChild(importFormComponent());
  let titleContact = document.querySelector(".contacto__title");
  titleContact.textContent = "Contacto";
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
