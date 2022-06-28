import styles from "../styles/Home.module.css";

const Card = ({ title, excerpt, readTime, tag, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.cardTitle}>{title}</p>
        <span className={styles.date}>{date}</span>
        <span className={styles.readTime}>{readTime}</span>
        <span className={styles.tag}>{tag}</span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.excerpt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum
          assumenda natus fugiat provident impedit.
        </p>
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.readButton}>Read</button>
      </div>
    </div>
  );
};

export default Card;
