import React, { useState } from "react";
import Logo from "../Logo/Logo";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import Modal from "../Modal/Modal";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";

const AppBar = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.menuLogo}>
          <Logo />
          <Navigation />
        </div>
        <AuthNav
          onRegisterClick={() => setModalType("register")}
          onLoginClick={() => setModalType("login")}
        />
        {modalType && (
          <Modal onClose={() => setModalType(null)}>
            {modalType === "register" && <RegistrationForm />}
            {modalType === "login" && <LoginForm />}
          </Modal>
        )}
      </div>
    </header>
  );
};

export default AppBar;
