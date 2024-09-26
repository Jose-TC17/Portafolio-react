// importando los estilos de contacto
import styleContact from "../CSS/Contact.module.css";
// importando el componente de content
import Content from "../../components/Content/Content.tsx";
// importando las imagenes
import imgWhatsApp from "../../img/whatsapp.webp";

export default function Contact() {
  return (
    // contenedor completo de contacto
    <section id="contact" className={styleContact.contact}>
      {/* llamando al componente de Content */}
      <Content>
        <div className={styleContact.containerContactBenifits}>
          {/* contenedor de contacto */}
          <div className={styleContact.containerContact}>
            {/* titulo de contacto */}
            <h3 className={styleContact.h3}>Contáctame</h3>
            {/* texto de contacto */}
            <p className={styleContact.pEmails}>
              Puedes comunicarte conmigo escribiendome a los siguientes correos:
            </p>
            {/* contenedor de los botones de contacto de email y outlook */}
            <div className={styleContact.containerEmails}>
              {/* enlaces de contacto */}
              <a
                className={[styleContact.aEmails, styleContact.email].join(" ")}
                href={
                  "mailto:josetuctoxdos1441@gmail.com?subject=Mensaje del Portafolio"
                }
                target="_blank"
              >
                Gmail
              </a>
              <a
                className={[styleContact.aEmails, styleContact.outlook].join(
                  " "
                )}
                href={
                  "https://outlook.live.com/owa/?path=/mail/action/compose&to=Jtc172004@outlook.com&subject=Mensaje del Portafolio"
                }
                target="_blank"
              >
                Outlook
              </a>
            </div>
            {/* texto de contacto de whatsapp */}
            <p className={styleContact.pWhatsApp}>
              O escribeme a mi WhatsApp a <br /> <b>+51 950 288 099</b>
            </p>
            <div className={styleContact.containerAWhatsApp}>
              {/* enlace de contacto de whatsapp */}
              <a
                href={
                  "https://api.whatsapp.com/send?phone=+51950288099&text=Hola José un gusto conocerte, "
                }
                target="_blank"
                className={styleContact.aWhatsApp}
              >
                <img
                  className={styleContact.imgWhatsApp}
                  src={imgWhatsApp}
                  alt={imgWhatsApp}
                />
                Escribeme ahora Aquí
              </a>
            </div>
          </div>
          {/* contenedor de los beneficios */}
          <div className={styleContact.benefits}>
            {/* texto de beneficios */}
            <p className={styleContact.pBenefits}>De mi parte obtendras...</p>
            {/* lista de beneficios */}
            <ul className={styleContact.containerList}>
              <li>Responsabilidad</li>
              <li>Disponibilidad</li>
              <li>Dedicación</li>
              <li>Trabajo en equipo</li>
            </ul>
          </div>
        </div>
      </Content>
    </section>
  );
}
