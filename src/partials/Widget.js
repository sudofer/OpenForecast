import "../styles/widget.css";
import { Link } from "react-router-dom";

const Widget = ({ day }) => {
    const { date, max, min, desc, icon } = day;
    console.log({ day });
    return (
        <div>
            <Link
                to={'/day'}
                style={{ textDecoration: 'none' }}
                state={{ day: day }}>
                <div className="widget-container">
                    <div className='image'>
                        <img src={require(`../assets/icons/${icon}.svg`)} alt={desc} />
                    </div>
                    <h1>{date}</h1>
                </div>
            </Link>
        </div>
    )
}

export default Widget;
