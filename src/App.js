import './App.css';
import { useEffect, useState } from 'react';
import { buildWeatherData, getCoords, getData } from './helpers';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from './Home';
import { FiveDay } from './FiveDay';
import { Day } from './Day';

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [searchText, setSearchText] = useState("");

  const onClickSearchButton = (searchString) => {
    setSearchText(searchString);
  }

  useEffect(() => {
      const getData = async (city) => {
      const coords = await getCoords(city);
      const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`
      const res = await fetch(endpoint);
      const body = await res.json();
  
      const dataArr = body.daily.map((day) => buildWeatherData(day, coords.city));
      setWeatherData(dataArr.slice(0, 5));
    } 

    if (searchText) {
      getData(searchText);
    }

  }, [searchText])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home onClickSearchButton={onClickSearchButton} />} />
          <Route exact path='/five-day' element={<FiveDay weatherData={weatherData} onClickSearchButton={onClickSearchButton} />} />
          <Route exact path='/day' element={<Day onClickSearchButton={onClickSearchButton} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;