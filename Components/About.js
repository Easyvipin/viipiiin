import Image from "next/image";
import styles from "../styles/Home.module.css";
import Profile from "../Images/Icons/jumping.svg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam suscipit quas sequi natus voluptates sed, accusamus
            aliquid. Laudantium saepe placeat quam hic fugiat inventore.
          </p>
          <a href="https://easyvipin.github.io">
            <button className={styles.exploreButton}>
              <p>Here is my portfolio</p>
              <Image
                src="https://img.icons8.com/ios/250/FFFFFF/galaxy.png"
                width="25"
                height="25"
              />
            </button>
          </a>
        </div>
        <div>
          <Image src={Profile} width={800} height={800}></Image>
        </div>
      </div>
      <div className={styles.explore}>&#129175;</div>
    </div>
  );
};

export default About;
