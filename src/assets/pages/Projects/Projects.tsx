// importando funciones para las contenido y las cartas del proyecto
import Content from "../../components/Content/Content.tsx";
import CardsProjects from "./CardsProjects";
// importando el archivo css
import styleProject from "../CSS/Projects.module.css";
// importando las imagenes de proyectos y tecnólogias
import imgLeoncioP from "../../img/leoncio-prado.webp";
import imgBoleta from "../../img/proyecto-boleta.webp";
import imgGestion from "../../img/asistencia-docentes.webp";
import imgCalculadora from "../../img/calculadora.webp";
import imgHtml from "../../img/html.webp";
import imgCss from "../../img/css.webp";
import imgJs from "../../img/js.webp";
import imgMysql from "../../img/mySQL.webp";
import imgLaravel from "../../img/laravel.webp";
import imgPython from "../../img/python.webp";
import imgPhp from "../../img/php.webp";

export default function Projects() {
  // creando una tupla para los proyectos a presentarse
  const cardP: [string, string, string, string[], string, string][] = [
    [
      "Página para un Club Leoncio Prado",
      "Leoncio Prado",
      'El proyecto consiste en crear una web, para un club deportivo, "Leoncio Prado"',
      [imgLaravel, imgMysql, imgJs],
      imgLeoncioP,
      "https://github.com/Jose-TC17/Leoncio-Prado",
    ],
    [
      "Desarrollo de una boleta de venta",
      "Boleta de Venta",
      "Creación de una boleta de venta que consiste en poder gestionar los productos.",
      [imgPython],
      imgBoleta,
      "https://github.com/Jose-TC17/boleta",
    ],
    [
      "Creación de un sistema de Gestión de Docentes",
      "Gestion de asistencia",
      "Desarrollo de un sistema de Gestión de asistencia para los docentes en la UNI.",
      [imgHtml, imgPhp, imgJs],
      imgGestion,
      "https://github.com/Jose-TC17/asistencia-docente",
    ],
    [
      "Desarrollo de una Calculadora Básica",
      "Calculadora",
      "Desarrollo de una calculadora web usando las tecnólogias HTML, CSS, Javascrit.",
      [imgHtml, imgCss, imgJs],
      imgCalculadora,
      "https://github.com/Jose-TC17/calculadora",
    ],
  ];

  return (
    // contenedor completo de los proyectos
    <section id="projects" className={styleProject.Projects}>
      {/* llamando al componentes content */}
      <Content>
        {/* contenedor de los proyectos */}
        <div className={styleProject.containerProjects}>
          {/* titulo de los proyectos */}
          <h3 className={styleProject.h3}>Proyectos Personales y Académicos</h3>
          {/* texto de los proyectos */}
          <p className={styleProject.p}>
            Te mostraré mis conocimientos a través de proyectos personales y
            académicos.
          </p>
          {/* contenedor de las cards de los proyectos */}
          <div className={styleProject.containerCardProjects}>
            {/* recorriendo de las cards de los proyectos */}
            {cardP.map((element, index) => (
              // componentes de los proyectos
              <CardsProjects
                title={element[0]}
                alt={element[1]}
                paf={element[2]}
                bgImg={element[4]}
                imgTec={element[3]}
                hrefTec={element[5]}
                key={index}
              />
            ))}
          </div>
        </div>
      </Content>
    </section>
  );
}
