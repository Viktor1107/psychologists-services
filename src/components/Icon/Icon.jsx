import s from "./Icon.module.css";

const Icon = ({ name, width = 24, height = 24, color = "#407bff" }) => {
  return (
    <svg width={width} height={height} className={s.icon} fill={color}>
      <use href={`#${name}`} />
    </svg>
  );
};
export default Icon;
