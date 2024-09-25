// importando los estilos del header
import styleHeader from "../CSS/Header.module.css";

// importando imagenes
import imgLogo from "../../img/logo.webp";
import imgMenu from "../../img/menu.svg";
import imgX from "../../img/X.svg";

import { useState } from "react";
import NavBar from "./NavBar";

export default function Header() {
  // usando el useState
  const [menuActive, setMenuActive] = useState(false);

  // creando la funcion de menu
  const funcMenuActive = () => {
    setMenuActive(!menuActive);
  };

  // condicional
  const stateMenu: string = menuActive
    ? [styleHeader.nav, styleHeader.active].join(" ")
    : styleHeader.nav;

  const stateImg: string = menuActive ? imgX : imgMenu;

  return (
    // estilos del header
    <header className={styleHeader.header}>
      {/* contenido del logo */}
      <div className={styleHeader.contentImg}>
        <img className={styleHeader.imgLogo} src={imgLogo} alt="img del logo" />
      </div>
      {/* nav */}
      <NavBar stateMenu={stateMenu} funcSetMenu={setMenuActive} />
      {/* estilos del boton del menu */}
      <div className={styleHeader.buttonMenu} onClick={funcMenuActive}>
        <img
          className={styleHeader.imgMenu}
          src={stateImg}
          alt="imagen del menu"
        />
      </div>
    </header>
  );
}
