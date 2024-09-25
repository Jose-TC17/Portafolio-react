// importando hooks
import React, { useEffect, useState } from "react";
import styleHeader from "../CSS/Header.module.css";

type Props = {
  stateMenu: string;
  funcSetMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<Props> = ({ stateMenu, funcSetMenu }) => {
  // creando el useState
  const [activeSection, setActiveSection] = useState<string>("main");

  // funcion para hacer el scroll
  const scrollToSection = (id: string) => {
    // llamando al id
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  // Usamos Intersection Observer para detectar la seccion activa
  useEffect(() => {
    // obteniendo todas las secciones
    const sections = document.querySelectorAll("section");
    // creando un intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // array de listas
  const list = [
    ["main", "Inicio"],
    ["seeMore", "Sobre mí"],
    ["skills", "Habilidades"],
    ["projects", "Proyectos"],
    ["contact", "Contáctame"],
  ];

  return (
    <nav className={stateMenu}>
      <label className={styleHeader.textMenu}>Menú</label>
      <ul className={styleHeader.ul}>
        {list.map((element, index) => (
          <li key={index}>
            <a
              href={`#${element[0]}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(`${element[0]}`);
                funcSetMenu(false);
              }}
              key={index}
              className={
                activeSection === `${element[0]}`
                  ? [styleHeader.a, styleHeader.active].join(" ")
                  : styleHeader.a
              }
            >
              {element[1]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
