import "./widget.css";
import { Link } from "react-router-dom";

const Widget = ({ day }) => {
    const { date, max, min, desc, icon, city } = day;
    console.log({ day });
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
