import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return ReactDOM.createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
