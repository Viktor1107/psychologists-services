import React from "react";
import imageNew from "/src/assets/imageNew.jpg";
import StatBadge from "../StatBadge/StatBadge";
import BlockSvgLeft from "../BlockSvgLeft/BlockSvgLeft";
import BlockSvgRight from "../BlockSvgRight/BlockSvgRight";
import s from "./HeroImageBlock.module.css";

const HeroImageBlock = () => {
  return (
    <div className={s.container}>
      <img src={imageNew} alt="Psychologist illustration" />

      <div className={s.blockSvgLeft}>
        <BlockSvgLeft />
      </div>
      <div className={s.blockSvgRight}>
        <BlockSvgRight />
      </div>
      <div className={s.statBadge}>
        <StatBadge />
      </div>
    </div>
  );
};

export default HeroImageBlock;
