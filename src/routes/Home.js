import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import "../styles/home.css";
import bg from "../assets/background.jpg";
import { useEffect } from "react";

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
};

export const Home = ({ onClickSearchButton, clearState }) => {
  useEffect(() => clearState());
  return (
    <div className="landing-page" style={styles}>
      <NavBar onClickSearchButton={onClickSearchButton} />
      <h1 className="landing-title">Enter a City</h1>
      <SearchBox home={true} onClickSearchButton={onClickSearchButton} />
    </div>
  );
};
