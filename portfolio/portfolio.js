function main() {
  let footerEl = document.querySelector("footer");
  footerEl.appendChild(importFooterComponent());
  let headerEl = document.querySelector("header");
  headerEl.appendChild(importHeaderComponent());
  let contenfulEl = document.querySelector(".contenful");

  function mostrarResultados1(resultados) {
    let contador = 0;
    const contenedor = document.querySelector(".contenedor");
    const template = document.querySelector("#cards");
    const arrayConUrls = resultados.includes.Asset.map(
      (x) => x.fields.file.url
    );

    for (const r of resultados.items) {
      if (r.fields.title) {
        const titleEl = template.content.querySelector(".title-card");
        titleEl.textContent = r.fields.title;
        const descriptionEl = template.content.querySelector(".p-card");
        descriptionEl.textContent = r.fields.descripcion;
        const urlEl = template.content.querySelector(".link");
        urlEl.href = r.fields.url;
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
    .then((data) => mostrarResultados1(data));
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
