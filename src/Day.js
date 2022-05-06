import { useLocation } from "react-router-dom";

export const Day = () => {


    const location = useLocation();
    console.log({ location });
    const { day } = location.state;
    console.log({ day });
    const { date, max, min, desc, icon, city, humidity } = day;


    return (
        <>
            {day && <div className="container">

                <div className='image'>
                    <img src={require(`./assets/icons/${icon}.svg`)} alt={desc} />
                </div>

                <h1>{date}</h1>
                <h1>{city}</h1>
                <h1>{desc}</h1>
                <h1> min temp: {min}c</h1>
                <h1>max temp: {max}c</h1>
                <h1>humidity: {humidity}</h1>

            </div>}
            <h1>hello</h1>

        </>
    )
}