import moment from "moment";

export const buildWeatherData = (day, city) => {
  const date = moment.unix(day.dt).format("dddd, MMMM Do");
  const desc = day.weather[0].description;
  const icon = day.weather[0].icon;
  const max = Math.floor(kelvinToCelcius(day.temp.max));
  const min = Math.floor(kelvinToCelcius(day.temp.min));
  const humidity = day.humidity;
  const weatherData = { city, date, desc, icon, max, min, humidity };
  return weatherData;
};

export const kelvinToCelcius = (k) => {
  return k - 273.15;
};
