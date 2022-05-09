import moment from "moment";


export const getCityWeather = async (city) => {
    const coords = await getCoords(city);
    const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`
    const res = await fetch(endpoint);
    const body = await res.json();

    const dataArr = body.daily.map((day) => buildWeatherData(day, coords.city));
    return dataArr.slice(0, 5);   
}

export const buildWeatherData = (day, city) => {
    const date = moment.unix(day.dt).format('dddd, MMMM Do');
    const desc = day.weather[0].description;
    const icon = day.weather[0].icon;
    const max = Math.floor(kelvinToCelcius(day.temp.max));
    const min = Math.floor(kelvinToCelcius(day.temp.min));
    const humidity = day.humidity;
    const weatherData = { city, date, desc, icon, max, min, humidity };
    return weatherData;
}

export const kelvinToCelcius = (k) => {
    return k - 273.15;
}

export const getCoords = async (searchString) => {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
    const body = await res.json();
    console.log(searchString)
    console.log(body);
    const lat = body[0]?.lat;
    const lon = body[0]?.lon;
    const city = body[0]?.name;
    console.log(city);
    return { lat, lon, city };
}

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
