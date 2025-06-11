import s from "./Icon.module.css";

const Icon = ({ name, className, width = 24, height = 24, color }) => {
  return (
    <svg width={width} height={height} className={className} fill={color}>
      <use href={`#${name}`} />
    </svg>
  );
};
export default Icon;
