let footerEl = document.querySelector("footer");
footerEl.appendChild(importFooterComponent());
let headerEl = document.querySelector("header");
headerEl.appendChild(importHeaderComponent());

function mostrarResultados(resultados) {
  let contador = 0;
  const contenedor = document.querySelector(".contenedor");
  const template = document.querySelector("#cards");
  const arrayConUrls = resultados.includes.Asset.map((x) => x.fields.file.url);

  for (const r of resultados.items) {
    const titleEl = template.content.querySelector(".title-card");
    titleEl.textContent = r.fields.title;
    const descriptionEl = template.content.querySelector(".p-card");
    descriptionEl.textContent = r.fields.descripcion;
    const imgEl = template.content.querySelector(".img-card");
    imgEl.src = arrayConUrls[contador];
    contador++;
    const clonar = document.importNode(template.content, true);
    contenedor.appendChild(clonar);
  }
}

function main() {
  fetch(
    "https://cdn.contentful.com/spaces/7dmr0uwu807a/environments/master/entries?access_token=psrVG_69pbSZ7C7d7jtQzABmYvEzQYILehhustser-w"
  )
    .then((response) => response.json())
    .then((data) => mostrarResultados(data));
}

main();
