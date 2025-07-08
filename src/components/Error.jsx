// src/components/Error.jsx
import styles from "../styles/Error.module.css";

function Error({ message }) {
  return (
    <div className={styles.container} role="alert">
      <div className={styles.card}>
        <h2 className={styles.title}>Oops!</h2>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}

export default Error;
