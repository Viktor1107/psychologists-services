import React from "react";
import s from "./StatBadge.module.css";

const StatBadge = () => {
  return (
    <div className={s.block}>
      <span className={s.wrapSvg}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z"
            fill="#54BE96"
          />
        </svg>
      </span>
      <div className={s.textBlock}>
        <p className={s.textOne}>Experienced psychologists</p>
        <p className={s.textSecond}>1500</p>
      </div>
    </div>
  );
};

export default StatBadge;
