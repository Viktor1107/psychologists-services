import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/psychologists">Psychologists</NavLink>
    </nav>
  );
};

export default Navigation;
