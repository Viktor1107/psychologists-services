import React, { useEffect } from "react";
import s from "./PsychologistCardModal.module.css";
import Icon from "../Icon/Icon";

const PsychologistCardModal = ({
  data,
  onClose,
  toggleFavorite,
  isFavorite,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        {/* <button className={s.closeBtn} onClick={onClose}>
          <Icon name="icon-icon-close" className={s.iconClose} />
        </button> */}
        <div className={s.header}>
          <img src={data.avatar_url} alt={data.name} className={s.photo} />
          <div className={s.info}>
            <p className={s.title}>Psychologist</p>
            <h2 className={s.name}>{data.name}</h2>
            <div className={s.tagsGroup}>
              <>
                <div className={s.tags}>
                  <span>
                    Experience: <b>{data.experience}</b>
                  </span>
                </div>
                <div className={s.tags}>
                  <span>
                    License: <b>{data.license}</b>
                  </span>
                </div>
              </>
              <>
                <div className={s.tags}>
                  <span>
                    Specialization: <b>{data.specialization}</b>
                  </span>
                </div>
                <div className={s.tags}>
                  <span>
                    Initial consultation: <b>{data.initial_consultation}</b>
                  </span>
                </div>
              </>
            </div>
          </div>
          <div className={s.ratingWrap}>
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
              <Icon
                name="icon-heart"
                width={16}
                height={15}
                active={isFavorite}
              />
            </button>
          </div>
        </div>

        <p className={s.about}>{data.about}</p>

        <div className={s.reviews}>
          <h3>Reviews:</h3>
          {data.reviews?.map((review, index) => (
            <div key={index} className={s.review}>
              <strong>{review.reviewer}</strong>
              <p>⭐ {review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        <button className={s.appointmentBtn}>Make an appointment</button>
      </div>
    </div>
  );
};

export default PsychologistCardModal;
