import React from "react";

//Style
import style from "./main.module.css";

const Main = ({ children }) => {
  return <div className={style.mainContainer}>{children}</div>;
};

export default Main;
