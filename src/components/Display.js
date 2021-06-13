import React from "react";
import "./Display.css";

const Display = ({ display }) => {
  return (
    <div className="display">
      <img className="display-img" src={display.picture.thumbnail} alt="" />
      <div className="display-text">
        <h1 className="display-name">{`${display.name.title} ${display.name.first} ${display.name.last}`}</h1>
        <p className="display-address">
          {`${display.location.street.number}, ${display.location.street.name}, ${display.location.city}, ${display.location.state}, ${display.location.country}, ${display.location.postcode}`}
        </p>
        <p className="display-timezone">
          {`${display.location.timezone.offset} - ${display.location.timezone.description}`}
        </p>
        <p className="display-gender">
          {display.gender[0].toUpperCase() + display.gender.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default Display;
