import './App.css';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { buildWeatherData, getCoords } from './helpers';
import Widget from './Widget';
import SearchBox from './SearchBox';
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
      console.log(coords);
      const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`

      const res = await fetch(endpoint);
      const body = await res.json();
      console.log(body);


      const dataArr = body.daily.map((day) => buildWeatherData(day, searchText));
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
          <Route exact path='/day' element={<Day />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/onecall?q=toronto&exclude=hourly&appid=f675671e099378f77252f56a5b3c3995