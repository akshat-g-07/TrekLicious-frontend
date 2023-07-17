import React from "react";
import "./TrekParallax.css";

const TrekParallax = ({ mid, treks, dimension }) => {
  return (
    <>
      <div
        className={`trekHolder ${dimension}`}
        style={{ transform: mid && "rotateY(-180deg)" }}
      >
        <img src={treks.img} />
        <p>{treks.name}</p>
      </div>
    </>
  );
};

export default TrekParallax;
