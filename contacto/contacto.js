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
  //selecciono el form
  const contactoEl = document.querySelector(".contacto__form");
  contactoEl.addEventListener("submit", function (event) {
    event.preventDefault();

    let formulario = event.target;
    var elemento = {
      name: formulario.nombreDelContacto.value,
      to: formulario.emailDelContacto.value,
      message: formulario.mensajeDelContacto.value,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "nahuel.cabral@hotmail.com",
        message: `Nombre: ${elemento.name}, Email: ${elemento.to}, Mensaje: ${elemento.message}`,
      }),
    }).then((data) => data.json());
    //resutaura los valores por defecto del form

    contactoEl.reset();
  });
}

main();
