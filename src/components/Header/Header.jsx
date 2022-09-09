import React from "react";
import style from "./Header.module.css";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} />

      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={`/login`}> Login </NavLink>}
      </div>
    </header>
  );
};

export default Header;
