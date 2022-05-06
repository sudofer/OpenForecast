import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

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
            <button onClick={() => onClickSearchButton(searchText)} >Search</button>

        </div>
    )
}

export default SearchBox;