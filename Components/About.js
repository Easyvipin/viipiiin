import Image from "next/image";
import styles from "../styles/Home.module.css";
import Profile from "../Images/Covers/strip2.jpg";

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
          <button className={styles.exploreButton}>
            <p>Explore More</p>
            <Image
              src="https://img.icons8.com/ios/250/000000/galaxy.png"
              width="25"
              height="25"
            />
          </button>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/ios/250/000000/user-male.png"
            width={700}
            height={700}
          ></Image>
        </div>
      </div>
      <div className={styles.explore}>&#129175;</div>
    </div>
  );
};

export default About;
