import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/day.css";

export const Day = ({ onClickSearchButton }) => {
  const location = useLocation();
  const { day } = location.state;
  const { date, max, min, desc, icon, city, humidity } = day;

  return (
    <>
      <NavBar onClickSearchButton={onClickSearchButton} />
      {day && (
        <div className="day-container">
          <div className="day-image-date">
            <div className="day-image">
              <img src={require(`../assets/icons/${icon}.svg`)} alt={desc} />
            </div>
            <h1>{date}</h1>
          </div>
          <h1>{city}</h1>
          <h1>{desc}</h1>
          <h1>min temp: {min}c</h1>
          <h1>max temp: {max}c</h1>
          <h1>humidity: {humidity}</h1>
        </div>
      )}
    </>
  );
};
