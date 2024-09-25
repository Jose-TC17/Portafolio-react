import Content from "../../components/Content/Content.tsx";
import styleExpe from "../CSS/Experience.module.css";
import Notes from "./Notes";
import SocialNetworks from "./SocialNetworks";

export default function Experience() {
  return (
    <section id="skills" className={styleExpe.experience}>
      <Content>
        <div className={styleExpe.containerExperience}>
          <div className={styleExpe.contentExp}>
            <h3 className={styleExpe.h3}>Experiencia</h3>
            <div className={styleExpe.contentNotes}>
              <Notes />
            </div>
          </div>
          <div className={styleExpe.contentSN}>
            <h3 className={styleExpe.h3Two}>Redes Sociales</h3>
            <div className={styleExpe.contentSocialNetworks}>
              <SocialNetworks />
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
}
