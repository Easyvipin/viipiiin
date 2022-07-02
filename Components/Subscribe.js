import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoadingIcon from "../Images/Icons/spinning-circles.svg";
import { useRef } from "react";

const Subscribe = ({ status, message, onSubmitted }) => {
  const emailRef = useRef();

  const handleSubmit = () => {
    emailRef.current.value.indexOf("@") > -1 &&
      onSubmitted({
        EMAIL: emailRef.current.value,
      });
  };

  const formatMessage = (messageString) => {
    return messageString.split("-")[1];
  };

  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.subscribeForm}>
        <h3 className={styles.subsHeading}>Subscribe to Weekly Newsletter!</h3>
        {status !== "success" && (
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <input ref={emailRef} type="email" placeholder=" Your Email" />
            </div>
            <button className={styles.subscribeButton} onClick={handleSubmit}>
              {status === "sending" ? (
                <Image src={LoadingIcon} width={"20px"} height={"30px"} />
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        )}

        <div className={styles.message}>
          {status === "error" ? (
            <span className={styles.errorMessage}>
              {formatMessage(message)}
            </span>
          ) : (
            <span className={styles.successMessage}>{message}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
