function importHeaderComponent() {
  let component = document.createElement("div");
  component.innerHTML = `  <header class="header">
    <h4 class="header__logo">NAHUE</h4>
    <nav class="header__nav--desktop">
    <a href="/Page/portfolio/portfolio.html"><button class="header__button-hamburger--desktop" >
    Portfolio
    </button></a>            
    <a href="/Page/servicios/servicios.html"><button class="header__button-hamburger--desktop" >
  Servicios
  </button> </a>          
  <a href="/Page/contacto/contacto.html"><button class="header__button-hamburger--desktop" >
  Contacto
  </button></a>
  </nav>
  <nav class="header__nav">
  <button class="header__button-hamburger" >
  </button>            
  <button class="header__button-hamburger" >
  </button>                
  <button class="header__button-hamburger" >
  </button>
  </nav>
  <div class="header__nav__ventana">
  <div class="header__nav__ventana__close">
  <a href="./index.html"><button class="header__nav__ventana__close--button " >
  X
  </button>        </a>
  </div>
  <div class="header__nav_ventana_dropdown-menu">
  <a href="/Page/portfolio/portfolio.html"><button class="header__dropdown-menu__button" >
  Portfolio
  </button>            </a>
  <a href="/Page/servicios/servicios.html"><button class="header__dropdown-menu__button" >
  Servicios
  </button>           </a>
  <a href="/Page/contacto/contacto.html"><button class="header__dropdown-menu__button" >
  Contacto
  </button></a>
  </div>
  </div>
  </header> `;
  return component;
}
