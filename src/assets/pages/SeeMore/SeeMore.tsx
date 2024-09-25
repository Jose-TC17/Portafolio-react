import styleSeeMore from "../CSS/SeeMore.module.css";
import imgFoto from "../../img/foto.webp";
import Content from "../../components/Content/Content.tsx";
// importando el pdf
import pdfCv from "../../PDF/josetcCv.pdf";

export default function SeeMore() {
  return (
    // See More
    <section id="seeMore" className={styleSeeMore.seeMore}>
      <Content>
        <>
          {/* contenedor de see More */}
          <div className={styleSeeMore.contentsSeeMore}>
            {/* primer contenedor */}
            <div className={styleSeeMore.contentOne}>
              {/* contenido de la imagen */}
              <div className={styleSeeMore.containerImg}>
                {/* imagen del programador */}
                <img
                  className={styleSeeMore.imgFoto}
                  src={imgFoto}
                  alt="img foto"
                />
              </div>
            </div>
            {/* segundo contenedor */}
            <div className={styleSeeMore.contentTwo}>
              {/* titulo del la seccion */}
              <h3 className={styleSeeMore.title}>Sobre Mí</h3>
              {/* parrafo de la seccion */}
              <p className={styleSeeMore.p}>
                Hola, soy José tengo 20 años, soy una persona apasionado por la
                tecnología que estudio Ing. de Software pero me decidí enfocarme
                al Desarrollo Full Stack. Aprendiendo el lenguaje de
                programación Python y JavaScript.
                <br />
                <br />
                Para más imformación puedes descargar mi Curriculum Vitae.
              </p>
              {/* contenedor de la seccion del boton */}
              <div className={styleSeeMore.containerLink}>
                <div className={styleSeeMore.linkDownloadCv}>
                  {/* link para descargar CV */}
                  <a download href={pdfCv} className={styleSeeMore.DownloadCv}>
                    <span>Descargar CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className={styleSeeMore.hr} />
        </>
      </Content>
    </section>
  );
}
