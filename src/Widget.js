import "./widget.css";
import { Link, Route, Routes } from "react-router-dom";
import { Day } from "./Day";
const Widget = ({ day }) => {
    const { date, max, min, desc, icon, city } = day;
    console.log({ day });
    const img = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (

        <>
            <Link
                to={'/day'}
                state={{ day: day }}>
                <div className="container">
                    <div className='image'>
                        <img src={require(`./assets/icons/${icon}.svg`)} alt={desc} />
                    </div>
                    <h1>{date}</h1>
                    <div className="temps">
                        <div>{max}c</div>
                        <div>{min}c</div>
                    </div>


                </div>
            </Link>
        </>
    )
}

export default Widget;

// style={{ textDecoration: 'none' }}