// importando los estilos de footer
import Content from "../Content/Content";
import styleFooter from "../CSS/Footer.module.css";

export function Footer() {
  return (
    <footer className={styleFooter.footer}>
      <Content>
        <>
          <hr className={styleFooter.hr} />
          <div className={styleFooter.contentText}>
            <p className={styleFooter.pFooter}>
              Creado por <span>José Tucto - {new Date().getFullYear()}</span>
            </p>
          </div>
        </>
      </Content>
    </footer>
  );
}
