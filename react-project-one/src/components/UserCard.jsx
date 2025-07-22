import React from 'react';
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className='user-container' style={{ backgroundColor: props.bgColor }}>
        <p id='user-name'>{props.name}</p>
        <img id='user-image' src={props.img} alt={props.name} />
        <p id='user-description'>{props.desc}</p>
    </div>
  );
};

export default UserCard;
