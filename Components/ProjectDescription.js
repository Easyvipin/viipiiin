import Image from "next/image";
import React from "react";
import styles from "../styles/project.module.css";

const ProjectDescription = ({ description, links, active }) => {
  return (
    <div className={styles.projectDescContainer}>
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

export default ProjectDescription;
