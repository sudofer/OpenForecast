import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import "../styles/nav-bar.css";
const NavBar = ({ onClickSearchButton }) => {


    return (
        <div className="nav-bar">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1>My Weather App</h1>
            </Link>
            <div className="nav-search">
                <SearchBox onClickSearchButton={onClickSearchButton} />
            </div>
        </div>)
}

export default NavBar;