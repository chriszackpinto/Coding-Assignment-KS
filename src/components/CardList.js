import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ directory, setDisplay }) => {
  return (
    <div className="cardList">
      {directory.map((data) => (
        <Card
          key={data.location.postcode}
          email={data.email}
          gender={data.gender}
          nat={data.nat}
          name={data.name}
          setDisplay={setDisplay}
          data={data}
        />
      ))}
    </div>
  );
};

export default CardList;
