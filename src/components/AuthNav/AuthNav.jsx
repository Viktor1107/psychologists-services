import React from "react";
import s from "./AuthNav.module.css";

const AuthNav = ({ onRegisterClick, onLoginClick }) => {
  return (
    <div className={s.container}>
      <nav className={s.container}>
        <button className={s.button} onClick={onLoginClick}>
          Login
        </button>
        <button className={s.buttonRegister} onClick={onRegisterClick}>
          Register
        </button>
      </nav>
    </div>
  );
};

export default AuthNav;
