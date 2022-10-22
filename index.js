function main() {
  //busco el elemento al que le quiero pegar//
  var headerEl = document.querySelector(".container__home__header");
  //ya con el elemento elegido, importo la funcion que trae todos los elementos reutilizables y los agrego con el appendChild al html//
  headerEl.appendChild(importHeaderComponent());
  var formEl = document.querySelector(".form-section");
  formEl.appendChild(importFormComponent());
  var footerEl = document.querySelector(".footer-section");
  footerEl.appendChild(importFooterComponent());
  //una vez que esta creado el elemento ,busco el boton al que le quiero pegar, como elegi el querySelectorAll me devuelve todos los elementos que se llaman igual, se que tiene 3 posiciones asi que las itero mas adelante//
  var botonEl = document.querySelectorAll(".header__button-hamburger");
  //seleciono el elemento ventana el cual tiene el display NONE//
  var ventanaEl = document.querySelector(".header__nav__ventana");
  //escucho todos los eventos click de los elementos botonEL, cuando se hace click la ventana pasa a tener un display FLEX , que la hace visible
  botonEl[0].addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });
  botonEl[1].addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });
  botonEl[2].addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });
  //escucho el evento del formulario "submit", paro lo que hace por defecto y devuelvo un objeto con los valores que necesito//
  function mostrarResultados(resultados) {
    let contador = 0;
    const contenedor = document.querySelector(".contenedor");
    const template = document.querySelector("#cards");
    const arrayConUrls = resultados.includes.Asset.map(
      (x) => x.fields.file.url
    );

    for (const r of resultados.items) {
      if (r.fields.imagenServicios) {
        const titleEl = template.content.querySelector(".title-card");
        titleEl.textContent = r.fields.titleServicio;
        const descriptionEl = template.content.querySelector(".p-card");
        descriptionEl.textContent = r.fields.descripcionServicio;

        const imgEl = template.content.querySelector(".img-card");
        imgEl.src = arrayConUrls[contador];
        contador++;
        const clonar = document.importNode(template.content, true);
        contenedor.appendChild(clonar);
      }
    }
  }
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

    formEl.reset();
  });

  fetch(
    "https://cdn.contentful.com/spaces/7dmr0uwu807a/environments/master/entries?access_token=psrVG_69pbSZ7C7d7jtQzABmYvEzQYILehhustser-w"
  )
    .then((response) => response.json())
    .then((data) => mostrarResultados(data));
}
main();
