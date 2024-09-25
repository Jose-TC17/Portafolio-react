import styleNoteExp from "../CSS/NotesExp.module.css";
import { useEffect } from "react";

export default function Notes() {
  const Notes: string[] = [
    "Manejo de PHP y Gestión de base de datos SQL Server para proyecto de Gestor de Docentes.",
    "Desarrollo de Boleta de venta, manejando el lenguaje Python con su libreria de Tkinter.",
    "Manejo de Laravel, y lenguajes como JavaScrit para la creación de una web para un club Deportivo.",
    "Manejo de Tecnologías para el Desarrollo de páginas webs robustas y responsivas.",
  ];

  useEffect(() => {
    const numExperience = document.querySelectorAll(`.${styleNoteExp.p}`);
    numExperience.forEach((elementNum, index) => {
      const htmlNum = elementNum as HTMLElement;
      htmlNum.style.setProperty("--num-experience", `"${index + 1}"`);
    });
  }, []);

  return (
    <>
      {Notes.map((element, index) => (
        <div className={styleNoteExp.contentPaf} key={index}>
          <p className={styleNoteExp.p} key={index}>
            {element}
          </p>
        </div>
      ))}
    </>
  );
}
