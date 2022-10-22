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
  //escucho el evento submit y paro la ejecucion por default
  contactoEl.addEventListener("submit", (e) => {
    e.preventDefault();
    //recibo los datos y los paso a objeto para poder enviarlos
    const formData = new FormData(contactoEl);
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
    //consumo la api, y le envio los datos solicitados
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "nahuel.cabral@hotmail.com",
        message: `Nombre: ${formEntries.name}, Email: ${formEntries.email}, Mensaje: ${formEntries.message}`,
      }),
    }).then((data) => data.json());
    //resutaura los valores por defecto del form
    formEl.reset();
  });
}

main();
