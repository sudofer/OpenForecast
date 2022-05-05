import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const SearchBox = ({ onClickSearchButton }) => {

    const [searchText, setSearchText] = useState("");

    console.log('in search box')
    return (
        <>

            <input
                type="text"
                className="search-box"
                placeholder="Search Any City..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => onClickSearchButton(searchText)} >Search</button>

        </>
    )
}

export default SearchBox;