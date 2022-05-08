import NavBar from "../partials/NavBar";
import Widget from "../partials/Widget";
import "../styles/five-day.css"
import { v4 as uuid } from 'uuid';

export const FiveDay = ({ weatherData, onClickSearchButton }) => {
    return (
        <>
            <NavBar onClickSearchButton={onClickSearchButton} />
            <h1>{weatherData && weatherData[0]?.city}</h1>
            {weatherData &&
                <div className='five-day'>
                    {weatherData.map((day) =>
                        <Widget day={day} key={uuid()} />)}</div>}
        </>
    )
}