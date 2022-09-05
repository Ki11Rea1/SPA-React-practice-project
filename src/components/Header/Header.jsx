import React from "react";
import style from "./Header.module.css";
import logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} />
    </header>
  );
};

export default Header;
