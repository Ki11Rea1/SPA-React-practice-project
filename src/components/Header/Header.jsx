import React from "react";
import style from "./Header.module.css";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} />

      <div className={style.loginBlock}>
        <NavLink to={`/login`}> Login </NavLink>
      </div>
    </header>
  );
};

export default Header;
