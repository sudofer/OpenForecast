import NavBar from "../partials/NavBar"
import SearchBox from "../partials/SearchBox"

export const Home = ({ onClickSearchButton }) => {

    return (
        <div>
            <NavBar onClickSearchButton={onClickSearchButton} />

            <SearchBox home={true} onClickSearchButton={onClickSearchButton} />
        </div>
    )

}