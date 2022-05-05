import SearchBox from "./SearchBox";
import "./nav-bar.css";
const NavBar = ({ onClickSearchButton }) => {
    console.log('in nav bar')
    return (
        <div className="nav-bar">
            <h1>My Weather App</h1>
            <SearchBox onClickSearchButton={onClickSearchButton} />
        </div>)
}

export default NavBar;