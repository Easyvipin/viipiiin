import styles from "../styles/Home.module.css";

const Subscribe = ({ status, message, onSubmitted }) => {
  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.subscribeForm}>
        <h3>Subscribe to Weekly Newsletter!</h3>

        <form className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input type="email" />
          </div>
          <button className={styles.subscribeButton}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
