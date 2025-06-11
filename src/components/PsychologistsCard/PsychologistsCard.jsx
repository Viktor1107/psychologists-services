import React, { useState } from "react";
import s from "./PsychologistsCard.module.css";
import Icon from "../Icon/Icon";

const PsychologistCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <li className={s.card}>
      <div className={s.header}>
        <img src={data.photo} alt={data.name} className={s.photo} />
        <div className={s.info}>
          <p className={s.title}>Psychologist</p>
          <h2 className={s.name}>{data.name}</h2>
          <div className={s.tags}>
            <span>
              Experience: <b>{data.experience}</b>
            </span>
            <span>
              License: <b>{data.license}</b>
            </span>
          </div>
          <div className={s.tags}>
            <span>
              Specialization: <b>{data.specialization}</b>
            </span>
            <span>
              Initial consultation: <b>{data.initial_consultation}</b>
            </span>
          </div>
        </div>
        <div className={s.ratingPrice}>
          <div className={s.rating}>
            <Icon name="icon-star" className={s.iconStar} />
            <span>{data.rating}</span>
          </div>
          <p>
            Price / 1 hour:{" "}
            <span className={s.price}>${data.price_per_hour}</span>
          </p>
        </div>
        <button className={s.heartBtn} onClick={toggleFavorite}>
          <Icon name="icon-heart" width={16} height={15} active={isFavorite} />
        </button>
      </div>
      <p className={s.about}>{data.about}</p>
      <button className={s.readMore}>Read more</button>
    </li>
  );
};

export default PsychologistCard;
