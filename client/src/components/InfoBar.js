import React from 'react';
import icon from './icons/icon.png';
import closeButton from './icons/closeButton.png';

const InfoBar = ({ room }) => {
  return (
    <div className="info-bar">
      <div className="left-wrapper">
        <img src={icon} className="icon" alt="user icon" />
        <h2>{room}</h2>
      </div>
      <div className="right-wrapper">
        <a href="/">
          <img src={closeButton} alt="close chat" />
        </a>
      </div>
    </div>
  )
}

export default InfoBar;
