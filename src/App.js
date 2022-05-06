import './App.css';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { buildWeatherData, getCoords } from './helpers';
import Widget from './Widget';
import SearchBox from './SearchBox';
import { route, BrowserRouter as router } from "react-router-dom";

function App() {

  const [weatherData, setWeatherData] = useState("");
  const [searchText, setSearchText] = useState();

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


      const dataArr = body.daily.map((day) => buildWeatherData(day));
      setWeatherData(dataArr.slice(0, 5));
    }
    if (searchText) {
      getData(searchText);
    }
  }, [searchText])


  return (
    <Router>

      <div className="App">
        <NavBar onClickSearchButton={onClickSearchButton} />

        {!weatherData &&
          <div className='landing-page-search'>
            <SearchBox onClickSearchButton={onClickSearchButton} />
          </div>}

        {weatherData &&
          <div className='five-day'>
            {weatherData.map((day) =>
              <Widget day={day} />)}</div>}
      </div>

    </Router>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/onecall?q=toronto&exclude=hourly&appid=f675671e099378f77252f56a5b3c3995