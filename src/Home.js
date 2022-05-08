import NavBar from "./NavBar"
import SearchBox from "./SearchBox"

export const Home = ({ onClickSearchButton }) => {

    return (
        <div>
            <NavBar onClickSearchButton={onClickSearchButton} />

            <SearchBox home={true} onClickSearchButton={onClickSearchButton} />
        </div>
    )

}