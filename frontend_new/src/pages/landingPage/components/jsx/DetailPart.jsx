import React from "react";
import "./DetailPart.css";
import RotatingPart from "./RotatingPart";

const DetailPart = () => {
  return (
    <>
      <video
        src="videos/vid01.mp4"
        muted
        autoPlay
        loop
        className="bgVideo"
      ></video>
      <div className="detailPart">
        <div id="title" style={{ marginTop: "10%" }}>
          TrekLicious
        </div>
        <div className="rotatingPartHolder">
          <div>is your much needed</div>
          <div className="rotatingPart">
            <RotatingPart />
          </div>
        </div>
        <div className="details">
          Welcome to Treklicious, the ultimate destination for adventure
          seekers. Explore a vast selection of exhilarating treks from around
          the world. Immerse yourself in stunning visuals, find comprehensive
          details, and plan your next unforgettable journey. Get ready to embark
          on the trek of a lifetime with Treklicious.
        </div>
        <div className="buttonHolder">
          <button className="button">Sign Up</button>
          <button className="button">Log In</button>
        </div>
      </div>
    </>
  );
};

export default DetailPart;
