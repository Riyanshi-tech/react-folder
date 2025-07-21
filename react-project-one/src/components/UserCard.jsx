import React from 'react';
import fairyimg from "../assets/fairy-7876740_1280.jpg";
import "./UserCard.css"; // ✅ correct CSS import

const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>Riyanshi</p>
        <img id='user-image' src={fairyimg} alt="Riyanshi" />
        <p id='user-description'>description of Riyanshi</p>
    </div>
  );
};

export default UserCard;
