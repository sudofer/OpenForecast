import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import "../styles/home.css";
import { useEffect } from "react";

export const Home = ({ onClickSearchButton, clearState }) => {
  useEffect(() => clearState());
  return (
    <div className="landing-page">
      <NavBar onClickSearchButton={onClickSearchButton} />
      <h1 className="landing-title">Enter a City</h1>
      <SearchBox home={true} onClickSearchButton={onClickSearchButton} />
    </div>
  );
};
