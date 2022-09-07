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

  fetch(
    "https://cdn.contentful.com/spaces/7dmr0uwu807a/environments/master/entries?access_token=psrVG_69pbSZ7C7d7jtQzABmYvEzQYILehhustser-w"
  )
    .then((response) => response.json())
    .then((data) => mostrarResultados(data));
}
main();
