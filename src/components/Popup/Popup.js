import React from "react";
import closeIcon from "./../../images/CloseIcon.svg";

import "./Popup.css";

function Popup({ onClose, selectedPhoto }) {
  
  return (
    <div className={`popup ${selectedPhoto.url ? "popup_is-opened" : ""}`}>
      <div className="popup__content popup__content_content_image">
        <button type="button" className="popup__close">
          <img src={closeIcon} alt="кнопка закрытия попапа" onClick={onClose} />
        </button>
        <img
          className="popup__image"
          src={selectedPhoto.url}
          alt={selectedPhoto.title}
        />
      </div>
    </div>
  );
}

export default Popup;
