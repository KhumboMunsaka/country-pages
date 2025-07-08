import styles from "../styles/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} aria-label="Loading"></div>
    </div>
  );
}

export default Loading;
