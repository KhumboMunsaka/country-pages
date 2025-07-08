import styles from "../styles/CountryComponent.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Neighbours from "./Neighbours";

function CountryComponent() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const BASE_URL = `https://restcountries.com/v3.1/alpha/${code.toLocaleLowerCase()}`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Failed to fetch country");
        const data = await res.json();
        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getCountry();
  }, [BASE_URL]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!code) return <p>Country not found</p>;
  return (
    <div className={styles.countryDetails}>
      <img src={country?.flags?.png} alt={country?.flags?.alt} />
      <h1>{country?.name?.common}</h1>
      <h3>{country?.name?.official}</h3>
      <div className={styles.countryStats}>
        <div className={styles.population}>
          <span>Population </span>
          <span>|</span>
          <span>{country?.population?.toLocaleString()}</span>
        </div>
        <div className={styles.area}>
          <span>Area </span>
          <span>|</span>
          <span>{country?.area.toLocaleString()} km²</span>
        </div>
      </div>
      <div className={styles.region}>
        <span>Region</span>
        <span>{country?.region}</span>
      </div>
      <div className={styles.subregion}>
        <span>Subregion</span>
        <span>{country?.subregion}</span>
      </div>
      {country.languages &&
        (() => {
          const values = Object.values(country.languages);
          return (
            <div className={styles.languages}>
              <span>Languages</span>
              <span>{values.join(", ")}</span>
            </div>
          );
        })()}
      <div className={styles.capital}>
        <span>Captial(s)</span>
        <span>{country?.capital.join(", ")}</span>
      </div>
      {/* Invoke function so currencies can be displayed */}
      {country.currencies &&
        (() => {
          // because the data being returned is an object
          const [, { name }] = Object.entries(country.currencies)[0];
          return (
            <div className={styles.currencies}>
              <span>Currencies </span>
              <span>{name} </span>
            </div>
          );
        })()}
      <Neighbours
        borders={country.borders}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default CountryComponent;
