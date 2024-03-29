import Image from "next/image";
import styles from "../styles/project.module.css";

const ProjectDescriptionMobile = ({ description, links, active }) => {
  return (
    <div
      className={`${styles.projectDescContainerMobile} ${
        active === true ? styles.projectDisplay : styles.projectHide
      }`}
    >
      <div className={styles.projectDescription}>
        <p>{description}</p>
        <div className={styles.linksFooter}>
          <a href="">
            <Image
              src="https://img.icons8.com/ios/250/FFFFFF/application-window.png"
              width={"30px"}
              height={"30px"}
            />
          </a>
          <a href="">
            <Image
              src="https://img.icons8.com/ios/250/FFFFFF/hammer.png"
              width={"30px"}
              height={"30px"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionMobile;
