import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import styles from "../styles/blog.module.css";
import ProfilePic from "../Images/Icons/profile.png";
import { useState } from "react";
import { useEffect } from "react";
const Pich = ({ title }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  });

  return (
    <div className={styles.pichContainer}>
      <div className={styles.aboutMe}>
        <div className={styles.aboutHeader}>
          <Image
            styles={styles.profileImg}
            src={ProfilePic}
            width={"90px"}
            height={"90px"}
          />
          <div className={styles.details}>
            <span className={styles.name}>Vipin Chandra</span>
            <span className={styles.profession}>
              Software Engineer | React.js | Next.js | Node.js
            </span>
          </div>
        </div>
        <p className={styles.pichMessage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quia itaque natus reprehenderit cupiditate magni, delectus modi sequi
          architecto doloremque.
        </p>
      </div>
      <div className={styles.pichActions}>
        <h2>Found Helpful ?</h2>
        <h5>Share this on!</h5>
        <div>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <EmailShareButton url={url} subject={title} body="body">
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default Pich;
