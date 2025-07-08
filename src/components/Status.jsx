import styles from "../styles/Status.module.css";
import { useCountries } from "../contexts/CountryApi";

function Status() {
  const { isMember, isIndependent, setIsMember, setIndependent } =
    useCountries();
  function handleMemberChange() {
    setIsMember((isMember) => !isMember);
  }
  function handleIndependenceChange() {
    setIndependent((isIndependent) => !isIndependent);
  }
  return (
    <div className={styles.container}>
      <span className={styles.label}>Status</span>
      <div className={styles.checkboxes}>
        <label className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            checked={isMember}
            onChange={handleMemberChange}
          />
          <span>Member of the United Nations</span>
        </label>
        <label className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            checked={isIndependent}
            onChange={handleIndependenceChange}
          />
          <span>Independent</span>
        </label>
      </div>
    </div>
  );
}

export default Status;
