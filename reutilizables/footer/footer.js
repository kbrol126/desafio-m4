function importFooterComponent() {
  let component = document.createElement("div");
  component.innerHTML = `<section class="footer">
    <h2 class="footer__h2">NAHUE
    </h2>
    <div class="footer__redes">
   
        <a class="footer__links" href="https://www.instagram.com/nahuel126"> Instagram
        <img src="/reutilizables/footer/Instagram.png" class="footer__img"></a>
   
        <a class="footer__links" href="https://www.linkedin.com/in/nahuel-cabral-0b20354a"> Linkedin
        <img src="/reutilizables/footer/Linkedin.png" class="footer__img"></a>
       
        <a class="footer__links" href="https://github.com/kbrol126"> GitHub
        <img src="/reutilizables/footer/GitHub.png" class= "footer__img"></a>
  </div>
  </section>`;
  return component;
}
