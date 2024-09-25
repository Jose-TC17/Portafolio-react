// importando los estilos de main
import styleMain from "../CSS/Main.module.css";
// importando las imagenes de redes sociales
import imgLinkedin from "../../img/linkedin.webp";
import imgGithub from "../../img/github.webp";
// importando los componentes del contenedor de btnSocial
import BtnSocial from "./btnSocial";
// importando el useEffect y useState
import { useEffect, useState } from "react";
// importando los estilos de btn social
import styleBtn from "../CSS/btnSocial.module.css";

export default function Main() {
  // texto del titulo de main
  const nameCareer: string = "Desarrollo de Software";

  //  hooks state
  const [displayText, setDisplayText] = useState<string>("");
  const [numberIndex, setNumberIndex] = useState<number>(0);

  // hook effect
  useEffect(() => {
    if (numberIndex < nameCareer.length) {
      const timeOutId = setTimeout(() => {
        setDisplayText((prev) => prev + nameCareer.charAt(numberIndex));
        setNumberIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeOutId);
    }
  }, [numberIndex, nameCareer]);

  // creando imgs
  const socialNetwork: string[][] = [
    [
      imgLinkedin,
      `img ${imgLinkedin}`,
      styleMain.imgSocial,
      "https://www.linkedin.com/in/profile-josetucto/",
    ],
    [
      imgGithub,
      `img ${imgLinkedin}`,
      styleMain.imgSocial,
      "https://github.com/Jose-TC17",
    ],
  ];

  return (
    // estilos del main
    <section id="main" className={styleMain.main}>
      {/* contenedor del Main */}
      <div className={styleMain.containerMain}>
        {/* contenedor del img del Programador y titulo de carrera */}
        <div className={styleMain.imgProgramerCareer}>
          {/* contenido del nombre y de la imagen del programador */}
          <div className={styleMain.contentNameImg}>
            <div className={styleMain.textName}>
              <p className={styleMain.textNameP}>
                ¡Hola soy! <br></br>
                <span className={styleMain.nameText}>
                  Soy <span className={styleMain.nameSpan}>José Tucto</span>
                </span>
              </p>
            </div>
            {/* contenido de la imagen del programador */}
            <div className={styleMain.contentImgProgramer}></div>
          </div>
          {/* contenido del titulo y del texto */}
          <div className={styleMain.titleDescription}>
            {/* titulo de la carrera */}
            <h1 className={styleMain.h1}>
              Me enfoco al <br />
              <span className={styleMain.textCareer}>
                {displayText}
                <span className={styleMain.punter}></span>
              </span>
            </h1>
            {/* contenido del texto y de las imagen de las redes sociales */}
            <div className={styleMain.textImgSocial}>
              <p className={styleMain.pDescription}>
                Bienvenido, te presentare mis conocimientos y habilidades que te
                puedo brindar.
              </p>
              <div className={styleMain.containerSocial}>
                {socialNetwork.map((element, index) => (
                  <a href={element[3]} key={index} target="_blank">
                    <img
                      className={element[2]}
                      src={element[0]}
                      alt={element[1]}
                      key={index}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* contenido de los botones */}
        <div className={styleMain.containerBtnSocial}>
          <BtnSocial
            nameBtn="Comenzar"
            linkBtn="#seeMore"
            clss={styleBtn.start}
            idBtn="seeMore"
          />
          <BtnSocial
            nameBtn="Contactarme"
            linkBtn="#contact"
            clss={styleBtn.contact}
            idBtn="contact"
          />
        </div>
      </div>
    </section>
  );
}
