import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>
          <NavLink to="/dialogs/1">Kirill</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2">File</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3">Ashot</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4">Yasigara</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/5">Link</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>Hello</div>
        <div className={style.message}>Want to hang out?</div>
        <div className={style.message}>Sure</div>
      </div>
    </div>
  );
};

export default Dialogs;
