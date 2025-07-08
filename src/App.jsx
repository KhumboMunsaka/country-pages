import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CountryContainer from "./components/CountryContainer";
import Heading from "./components/Heading";
import PageNotFound from "./components/PageNotFound";
import CountryComponent from "./components/CountryComponent";
import { CountryProvider } from "./contexts/CountryApi";

function App() {
  return (
    <BrowserRouter>
      <CountryProvider>
        <div className="app">
          <Heading />
          <Routes>
            <Route path="/" element={<CountryContainer />}>
              <Route path="/country/:code" element={<CountryComponent />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </CountryProvider>
    </BrowserRouter>
  );
}

export default App;
