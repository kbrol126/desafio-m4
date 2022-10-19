function importHeaderComponent() {
  let component = document.createElement("div");
  component.innerHTML = `  <header class="header">
  <a href="/index.html" class="link__logo"><h4 class="header__logo" >NAHUE</h4></a>  

    <nav class="header__nav--desktop">
    <a href="portfolio/index.html"><button class="header__button-hamburger--desktop" >
    Portfolio
    </button></a>            
    <a href="servicios/index.html"><button class="header__button-hamburger--desktop" >
  Servicios
  </button> </a>          
  <a href="contacto/index.html"><button class="header__button-hamburger--desktop" >
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
  <a href="/index.html"><button class="header__nav__ventana__close--button " >
  
  </button>        </a>
  </div>
  <div class="header__nav_ventana_dropdown-menu">
  <a href="portfolio/index.html"><button class="header__dropdown-menu__button" >
  Portfolio
  </button>            </a>
  <a href="servicios/index.html"><button class="header__dropdown-menu__button" >
  Servicios
  </button>           </a>
  <a href="contacto/index.html"><button class="header__dropdown-menu__button" >
  Contacto
  </button></a>
  </div>
  </div>
  </header> `;
  return component;
}
