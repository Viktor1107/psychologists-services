import React from "react";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <p className={s.textOne}>
        psychologists<span className={s.wrap}>.</span>
        <span className={s.services}>services</span>
      </p>
    </div>
  );
};

export default Logo;
