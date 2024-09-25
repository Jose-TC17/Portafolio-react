import Content from "../../components/Content/Content.tsx";
import CardTec from "./CardTec";
import styleSkills from "../CSS/Skills.module.css";
// llamado a las imagenes
import imgHtml from "../../img/html.webp";
import imgCss from "../../img/css.webp";
import imgJs from "../../img/js.webp";
import imgTs from "../../img/ts.webp";
import imgReact from "../../img/react.webp";
import imgGit from "../../img/git.webp";
import imgPython from "../../img/python.webp";
import imgSqlServer from "../../img/SqlServer.webp";
import imgMySql from "../../img/mySQL.webp";
import imgPhp from "../../img/php.webp";
import imgLaravel from "../../img/laravel.webp";
import imgBootstrap from "../../img/bootstrap.webp";

export default function Skills() {
  // contenido de texto
  const textWeb: string = `Conocimiento de tecnologías relacionadas al desarrollo web, creando páginas web atractivas y responsiva según el dispositivo que se use.`;
  const textDesktop: string = `Conocimiento de tecnologías para el desarrollo de software de escritorio, creando software eficientes, robustas y escalables.`;

  // creando el array del contenido de las cartas
  const cardSkills: string[][] = [
    ["Desarrollo Web", textWeb],
    ["Desarrollo de Escritorio", textDesktop],
  ];

  // creando el array de la imagen
  const imgTec: string[][] = [
    [imgHtml, "HTML"],
    [imgCss, "CSS"],
    [imgJs, "JavaScript"],
    [imgTs, "TypeScript"],
    [imgReact, "React"],
    [imgGit, "Git"],
    [imgPython, "Python"],
    [imgMySql, "MySql"],
    [imgSqlServer, "Sql Server"],
    [imgPhp, "PHP"],
    [imgLaravel, "Laravel"],
    [imgBootstrap, "Bootstrap"],
  ];

  return (
    <section id="skills" className={styleSkills.skills}>
      <Content>
        <>
          <div className={styleSkills.containerSkills}>
            <div className={styleSkills.contentOne}>
              <h3 className={styleSkills.h3}>Habilidades</h3>
              <div className={styleSkills.cards}>
                {cardSkills.map((element, index) => (
                  <CardTec
                    titleCard={element[0]}
                    cardPaf={element[1]}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className={styleSkills.containerTec}>
              {imgTec.map((element, index) => (
                <div className={styleSkills.cardTec} key={index}>
                  <img
                    className={styleSkills.imgTec}
                    src={element[0]}
                    alt={element[1]}
                    key={index}
                  />
                  <p className={styleSkills.pTec}>{element[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      </Content>
    </section>
  );
}
