import Image from "next/image";
import React, { useState } from "react";
import projectsData from "../data/projects/projects";
import styles from "../styles/project.module.css";
import ProjectDescription from "./ProjectDescription";
import ProjectDescriptionMobile from "./ProjectDescriptionMobile";
const Projects = () => {
  const allProjectsArry = Object.keys(projectsData);
  const [currentProject, setCurrentProject] = useState(
    projectsData[`${allProjectsArry[0]}`]
  );

  const handleClick = (e, projectName) => {
    setCurrentProject(projectsData[`${projectName}`]);
  };

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectHeader}>
        <div>Project Directory</div>
        <Image
          src="https://img.icons8.com/ios/250/000000/source-code.png"
          width={"50px"}
          height={"50px"}
        />
      </div>

      <div className={styles.projectContent}>
        <div className={styles.projectListContainer}>
          {allProjectsArry.map((eachProject) => (
            <>
              <button
                onClick={(e) => handleClick(e, `${eachProject}`)}
                id={eachProject}
                key={eachProject}
                className={`${styles.eachList} ${
                  currentProject.key === eachProject && styles.activeButton
                } `}
              >
                <Image
                  src="https://img.icons8.com/ios/250/000000/box.png"
                  width={"30px"}
                  height={"30px"}
                />
                &nbsp; &nbsp;
                <div> / {eachProject}</div>
              </button>
              <ProjectDescriptionMobile
                description={projectsData[`${eachProject}`].description}
                link={projectsData[`${eachProject}`].links}
                active={currentProject.key === eachProject ? true : false}
              />
            </>
          ))}
        </div>
        <ProjectDescription
          description={currentProject.description}
          link={currentProject.links}
        />
      </div>
    </div>
  );
};

export default Projects;
