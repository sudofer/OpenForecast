import NavBar from "../partials/NavBar"
import SearchBox from "../partials/SearchBox"
import '../styles/home.css'
import bg from '../assets/background.jpg'
import { useEffect } from "react"

const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    color: 'red'
}
export const Home = ({ onClickSearchButton, clearState }) => {

    useEffect(() => clearState())
    return (
        <div className="landing-page" style={styles}>
            <NavBar onClickSearchButton={onClickSearchButton} />
            <SearchBox home={true} onClickSearchButton={onClickSearchButton} />
        </div>
    )

}