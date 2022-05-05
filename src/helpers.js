import moment from "moment";



export const buildWeatherData = (day, city) => {

    //cityName
    //icon
    //date: weekday,month num
    //description (light rain)
    //min temp
    //max temp
    //humidity


    const date = moment.unix(day.dt).format('dddd');
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

export const getCoords = async (city) => {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
    const body = await res.json();
    console.log(body);
    const lat = body[0]?.lat;
    const lon = body[0]?.lon;

    return { lat, lon };
}