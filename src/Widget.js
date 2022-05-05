const Widget = ({ day }) => {
    const { date, max, min, desc, icon } = day;

    const img = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <div className="container">
            <h1>{date}</h1>
            <div className="temps">
                <div>{max}c</div>
                <div>{min}c</div>
            </div>
            <div className='image-container'>
                <img src={img} alt={desc} />
            </div>

        </div>)
}

export default Widget;