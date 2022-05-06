import NavBar from "./NavBar"
import SearchBox from "./SearchBox"

export const Home = () => {



    return (
        <div>
            <NavBar onClickSearchButton={onClickSearchButton} />
            <SearchBox />
        </div>
    )

}