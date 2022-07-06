import Image from "next/image";
import React from "react";
import styles from "../styles/blog.module.css";
import ProfilePic from "../Images/Icons/profile.png";
const Pich = () => {
  return (
    <div className={styles.pichContainer}>
      <div className={styles.aboutMe}>
        <div className={styles.aboutHeader}>
          <Image src={ProfilePic} width={"90px"} height={"90px"} />
          <div className={styles.details}>
            <span className={styles.name}>Vipin Chandra</span>
            <span className={styles.profession}>Software Engineer</span>
          </div>
        </div>
        <p className={styles.pichMessage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quia itaque natus reprehenderit cupiditate magni, delectus modi sequi
          architecto doloremque.
        </p>
      </div>
      <div className={styles.pichActions}>
        <button>Share!</button>
        <button>Got a Work ?</button>
      </div>
    </div>
  );
};

export default Pich;
