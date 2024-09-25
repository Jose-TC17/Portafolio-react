import imgLinkedin from "../../img/linkedin.webp";
import imgInstagram from "../../img/Instagram.webp";
import imgGitHub from "../../img/github.webp";
import imgSoloLearn from "../../img/sololearn.webp";
import styleSocialN from "../CSS/SocialN.module.css";

export default function SocialNetworks() {
  const Notes: [string, string, string][] = [
    [imgLinkedin, "Linkedin", "https://www.linkedin.com/in/profile-josetucto/"],
    [imgInstagram, "Instagram", "https://www.instagram.com/josetucto_tc/"],
    [imgGitHub, "GitHub", "https://github.com/Jose-TC17"],
    [imgSoloLearn, "SoloLearn", "https://bit.ly/profile-sololearn"],
  ];
  return (
    <>
      {Notes.map((element, index) => (
        <a
          href={element[2]}
          target="_blank"
          className={styleSocialN.a}
          key={index}
        >
          <img
            className={styleSocialN.img}
            src={element[0]}
            key={index}
            alt={element[1]}
          />
          {element[1]}
        </a>
      ))}
    </>
  );
}
