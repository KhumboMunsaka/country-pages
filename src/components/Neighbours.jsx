import React, { useEffect, useState } from "react";
import styles from "../styles/Neighbours.module.css";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Neighbours({ borders, loading, setLoading }) {
  const [neighbours, setNeighbours] = useState([]);
  const navigate = useNavigate();
  function switchCountry(newCountryCode) {
    navigate(`/country/${newCountryCode}`);
  }
  useEffect(() => {
    if (!borders?.length) return;
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`)
      .then((res) => res.json())
      .then((data) => setNeighbours(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [borders, loading, setLoading]);

  return (
    <>
      <div className={styles.grid}>
        {neighbours.map((c) => (
          <div
            key={c.cca2}
            className={styles.card}
            onClick={() => switchCountry(c.cca2)}
          >
            <img
              className={styles.flag}
              src={c.flags.svg}
              alt={`Flag of ${c.name.common}`}
            />
            <span className={styles.name}>{c.name.common}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Neighbours;
