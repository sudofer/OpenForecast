import "./search-box.css"
import { useState } from "react";
import { FiveDay } from "./FiveDay";
import { Link } from "react-router-dom";
const SearchBox = ({ onClickSearchButton }) => {

    const [searchText, setSearchText] = useState("");

    console.log('in search box')
    return (
        <div>

            <input
                type="text"
                className="search-box"
                placeholder="Search Any City..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Link to='/five-day' style={{ textDecoration: 'none' }} element={<FiveDay />}>
                <button onClick={() => onClickSearchButton(searchText)} >Search</button>

            </Link>

        </div>
    )
}

export default SearchBox;