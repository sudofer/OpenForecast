import NavBar from "../components/NavBar";
import Widget from "../components/Widget";
import "../styles/five-day.css";
import { v4 as uuid } from "uuid";

export const FiveDay = ({ weatherData, onClickSearchButton, error }) => {
  return (
    <>
      <NavBar onClickSearchButton={onClickSearchButton} />

      {error && (
        <h1>There was an error with your last search. Please try again.</h1>
      )}
      <h1>{weatherData && weatherData[0]?.city}</h1>
      {weatherData && (
        <div className="five-day">
          {weatherData.map((day) => (
            <Widget day={day} key={uuid()} />
          ))}
        </div>
      )}
    </>
  );
};
