import NavBar from "./NavBar";
import Widget from "./Widget";
import "./five-day.css"
import { capitalize } from "./helpers";
import { Day } from "./Day";
import { v4 as uuid } from 'uuid';

export const FiveDay = ({ weatherData, onClickSearchButton }) => {
    return (
        <>
            <NavBar onClickSearchButton={onClickSearchButton} />

            <h1>{weatherData && capitalize(weatherData[0].city)}</h1>
            {weatherData &&
                <div className='five-day'>
                    {weatherData.map((day) =>
                        <Widget day={day} key={uuid()} />)}</div>}
        </>
    )
}