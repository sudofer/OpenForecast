import "./search-box.css"
import { useState } from "react";
import { FiveDay } from "./FiveDay";
import { Link } from "react-router-dom";


const SearchBox = ({ onClickSearchButton, home }) => {
    const [inputText, setInputText] = useState("");

    return (
        <div className={home ? "home" : "nav"}>
            <input
                type="text"
                className="search-box"
                placeholder="Search Any City..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? document.getElementById('btn').click() : null}
            />
            <Link to='/five-day' style={{ textDecoration: 'none' }} element={<FiveDay />}>
                <button id='btn' onClick={() => onClickSearchButton(inputText)} >Get Weather</button>
            </Link>
        </div>
    )
}

export default SearchBox;