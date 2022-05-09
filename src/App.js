import "./styles/App.css";
import { useEffect, useState } from "react";
import { getCityWeather } from "./libs/api";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./routes/Home";
import { FiveDay } from "./routes/FiveDay";
import { Day } from "./routes/Day";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  const onClickSearchButton = (searchString) => {
    setWeatherData("");
    setSearchText(searchString);
  };

  const clearState = () => {
    setWeatherData("");
    setSearchText("");
  };

  useEffect(() => {
    const getWeatherData = async (city) => {
      setError(false);
      setWeatherData("");
      const newWeatherData = await getCityWeather(city);
      if (newWeatherData.isError) {
        setError(true);
      } else setWeatherData(newWeatherData);
    };

    if (searchText) {
      getWeatherData(searchText);
    }
  }, [searchText]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                clearState={clearState}
                onClickSearchButton={onClickSearchButton}
              />
            }
          />
          <Route
            exact
            path="/five-day"
            element={
              <FiveDay
                weatherData={weatherData}
                error={error}
                onClickSearchButton={onClickSearchButton}
              />
            }
          />
          <Route
            exact
            path="/day"
            element={<Day onClickSearchButton={onClickSearchButton} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
