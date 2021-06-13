import React from "react";
import "./Card.css";

const Card = ({ data, email, gender, nat, name, setDisplay }) => {
  const getDisplay = function () {
    setDisplay(data);
  };
  return (
    <div
      className="card"
      onClick={() => {
        getDisplay();
      }}
    >
      <p className="card-gender">
        {gender[0].toUpperCase() + gender.slice(1)} &bull; <span>{nat}</span>
      </p>
      <h3 className="card-name">{`${name.title}. ${name.first} ${name.last}`}</h3>
      <p className="card-email">{email}</p>
    </div>
  );
};

export default Card;
