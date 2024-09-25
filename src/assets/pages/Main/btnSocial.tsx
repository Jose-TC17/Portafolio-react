// importando los estilos de boton social
import styleBtn from "../CSS/btnSocial.module.css";

// props
type Props = {
  nameBtn: string;
  linkBtn: string;
  clss: string;
  idBtn: string;
};

export default function BtnSocial(props: Props) {
  // creando la funcion para localizar la posición del scroll
  const positionScroll = (id: string) => {
    const getId = document.getElementById(id);
    if (getId) {
      window.scrollTo({
        top: getId.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  // llamando a los props
  const { nameBtn, linkBtn, clss, idBtn } = props;
  return (
    // contenedor de los btn
    <div className={[styleBtn.contentBtn, clss].join(" ")}>
      {/* enlaces de a */}
      <a
        className={styleBtn.btn}
        href={linkBtn}
        onClick={(e) => {
          e.preventDefault();
          positionScroll(`${idBtn}`);
        }}
      >
        {nameBtn}
      </a>
    </div>
  );
}
