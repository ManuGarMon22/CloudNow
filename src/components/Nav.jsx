import React from "react";
import Logo from "../Logo3.png";
import SearchBar from "./SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav>
      <Link to="/">
        <img className={style.logo} src={Logo} alt="" />
      </Link>
      <Link className={style.about} to="/about">
        About
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
