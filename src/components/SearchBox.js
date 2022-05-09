import "../styles/search-box.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//{ home } is a css flag to indicate SearchBox is being rendered on the home page
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
      />
      <Link to="/five-day" style={{ textDecoration: "none" }}>
        <button id="btn" onClick={() => onClickSearchButton(inputText)}>
          Get Weather
        </button>
      </Link>
    </div>
  );
};

export default SearchBox;
