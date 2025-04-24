import React from "react";
import s from "./WelcomePage.module.css";
import HeroOne from "../../components/HeroOne/HeroOne";
import HeroImageBlock from "../../components/HeroImageBlock/HeroImageBlock";

const WelcomePage = () => {
  return (
    <div className={s.block}>
      <HeroOne />
      <HeroImageBlock />
    </div>
  );
};

export default WelcomePage;
