import FoundCountriesDetails from "./FoundCountriesDetails";
import SearchBar from "./SearchBar";
import SortingTab from "./SortingTab";
import Status from "./Status";
import "../styles/CountryContainer.css";
import RegionSorter from "./RegionSorter";
import CountryList from "./CountryList";
import { Outlet, useParams } from "react-router-dom";
function CountryContainer() {
  const { code } = useParams();
  return (
    <div className="country-container">
      {code ? (
        <Outlet />
      ) : (
        <>
          <div className="found-n-search">
            <FoundCountriesDetails />

            <SearchBar />
          </div>
          <div className="all-details">
            <div className="sort-them">
              <SortingTab />
              <RegionSorter />
              <Status />
            </div>
            <div className="country-list">
              <CountryList />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryContainer;
