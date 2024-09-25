// uso del useState
import { useState, useEffect } from "react";
// llamando al archivo css
import styleProjects from "../CSS/CardsProjects.module.css";

// props
type Props = {
  title: string;
  paf: string;
  bgImg: string;
  alt: string;
  imgTec: string[];
  hrefTec: string;
};

// funcion de las card en el contenedor de los proyectos
export default function CardsProjects(props: Props) {
  // llamando a las props
  const { title, paf, bgImg, alt, imgTec, hrefTec } = props;

  // usando el useState
  const [stateImg, setStateImg] = useState(false);

  // funcion de los estados
  const funcStateImg = () => {
    setStateImg(!stateImg);
  };

  // usando del useState
  useEffect(() => {
    // llamando a la clase para el bg de imgs
    const nameBgImg = document.querySelectorAll(
      `.${styleProjects.contentCardImg}`
    );
    // array de string de los nombres de los titulos de la imagen
    const nameTitleBg: string[] = [
      "Página para un club deportivo\\A (Leoncio Prado)",
      "Desarrollo de una Boleta de Venta\\A (Proyecto Personal)",
      "Desarrollo de un Sistema de Gestión para docentes\\A (Proyecto en Grupo - UNI)",
      "Desarrollo de una Calculadora Web\\A (Proyecto Personal)",
    ];
    // recorriendo el array
    nameBgImg.forEach((element, index) => {
      // indicando que element se va a comportar como HTMLElement y nos brindara sus propiedades
      const numElement = element as HTMLElement;
      numElement.style.setProperty(
        // llamando a nombre de la variable var que esta en el css
        "--name-bg-project",
        // es el nombre que se tendra en el content
        `"${nameTitleBg[index]}"`
      );
    });
  }, []);

  // condicional del contenedor de la carta
  const contentCard: string = stateImg
    ? [styleProjects.contentCard, styleProjects.active].join(" ")
    : styleProjects.contentCard;

  // condicional de los contenidos de imagen de la carta
  const stateClassCard: string = stateImg
    ? [styleProjects.contentCardImg, styleProjects.active].join(" ")
    : styleProjects.contentCardImg;

  // condicional del texto del boton para ver imagenes y detalles
  const stateBtnText: string = stateImg ? "Detalles" : "Ver Img";

  return (
    <>
      {/* // contenido de la carta */}
      <div className={contentCard}>
        {/* contenedor de la imagen */}
        <div className={stateClassCard}>
          {/* imagen */}
          <img
            className={styleProjects.bgImg}
            src={bgImg}
            alt={`imagen ${alt}`}
          />
        </div>
        {/* contenido del titulo */}
        <h3 className={styleProjects.h3}>{title}</h3>
        {/* contenedor del contenido de los datos de las cartas */}
        <div className={styleProjects.contentData}>
          {/* contenido del texto */}
          <p className={styleProjects.p}>{paf}</p>
          {/* contenedor de las tecnólogias */}
          <div className={styleProjects.tec}>
            {/* recorriendo las imagenes de las tecnólogias */}
            {imgTec.map((ele, idx) => (
              // contenedor de la imagen de las tecnólogias
              <div className={styleProjects.contentImgTec} key={idx}>
                {/* img de tecnólogias */}
                <img
                  src={ele}
                  className={styleProjects.imgTec}
                  key={idx}
                  alt="tecnologias"
                />
              </div>
            ))}
          </div>
          {/* contenedor de los botones */}
          <div className={styleProjects.contentA}>
            {/* boton de github */}
            <a href={hrefTec} className={styleProjects.github}>
              GitHub
            </a>
            {/* boton de la img y ver detalles */}
            <div onClick={funcStateImg} className={styleProjects.btnImg}>
              {stateBtnText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
