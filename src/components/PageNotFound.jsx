import styles from "../styles/PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>Path Not Found :(</div>
    </div>
  );
}

export default PageNotFound;
