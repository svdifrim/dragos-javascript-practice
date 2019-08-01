import React from "react";

//Style
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.appHeader}>Header component</h1>
    </div>
  );
};

export default Header;
