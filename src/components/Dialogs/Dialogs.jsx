import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={(style.dialog, style.active)}>Kirill</div>
        <div className={style.dialog}>File</div>
        <div className={style.dialog}>Ashot</div>
        <div className={style.dialog}>Yasigara</div>
        <div className={style.dialog}>Krivoi Kirill</div>
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
