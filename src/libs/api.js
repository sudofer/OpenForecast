import { buildWeatherData } from "./helpers";

export const getCityWeather = async (city) => {
  const coords = await getCoords(city);
  const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`;
  const res = await fetch(endpoint);
  if (!res.ok) return { isError: true };
  const body = await res.json();
  const dataArr = body.daily.map((day) => buildWeatherData(day, coords.city));
  return dataArr.slice(0, 5);
};

export const getCoords = async (searchString) => {
  const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=1&appid=${process.env.REACT_APP_API_KEY}`;
  const res = await fetch(endpoint);
  if (!res.ok) return { isError: true };
  const body = await res.json();
  const lat = body[0]?.lat;
  const lon = body[0]?.lon;
  const city = body[0]?.name;
  return { lat, lon, city };
};
