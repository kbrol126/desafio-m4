function importFormComponent() {
  let component = document.createElement("div");
  component.innerHTML = `<section class="contactos">
  <h3 class="contacto__title">Escribime</h3>
  <form class="contacto__form">
  <label class="contacto__form__label" for="">
      <h5 class="contacto__form__label__h5">NOMBRE</h5>
      <input name="nombreDelContacto" class="contacto__form__label__input" type="text">
  </label>
  <label class="contacto__form__label" for="">
      <h5 class="contacto__form__label__h5">EMAIL</h5>
      <input name="emailDelContacto" class="contacto__form__label__input" type="email">
  </label>
  <label class="contacto__form__label" for="">
      <h5 class="contacto__form__label__h5">MENSAJE</h5>
     <textarea name="mensajeDelContacto" class="contacto__form__label__textarea" name="" id="" cols="30" rows="10">

     </textarea>
  </label>
  <button class="contacto__form__button">Enviar</button>
</form>
</section>`;
  return component;
}
const contactoEl = document.querySelector(".contacto__form");
function postForm(contactoEl) {
  contactoEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactoEl);
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "nahuel.cabral@hotmail.com",
        message: `Nombre: ${formEntries.name}, Email: ${formEntries.email}, Mensaje: ${formEntries.message}`,
      }),
    }).then((data) => data.json());

    formEl.reset();
  });
}
