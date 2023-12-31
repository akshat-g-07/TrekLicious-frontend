import React, { useEffect } from "react";
import "../css/LogInPageDesign.css";
import { Link } from "react-router-dom";

const LogInPageDesign = () => {
  const toggleOpacity = (elementID) => {
    elementID === "profileNormal"
      ? (() => {
          document.querySelector("#profileNormal").style.opacity = 1;
          document.querySelector("#profileUsername").style.opacity = 0;
          document.querySelector("#profilePassword").style.opacity = 0;
        })()
      : elementID === "profileUsername"
      ? (() => {
          document.querySelector("#profileNormal").style.opacity = 0;
          document.querySelector("#profileUsername").style.opacity = 1;
          document.querySelector("#profilePassword").style.opacity = 0;
        })()
      : (() => {
          document.querySelector("#profileNormal").style.opacity = 0;
          document.querySelector("#profileUsername").style.opacity = 0;
          document.querySelector("#profilePassword").style.opacity = 1;
        })();
  };

  useEffect(() => {
    toggleOpacity("profileNormal");
  }, []);

  return (
    <>
      <div className="formHolderBG">
        <div className="profilePhoto">
          <img id="profileNormal" src="images/profileNormal.png" />
          <img id="profileUsername" src="images/profileUsername.png" />
          <img id="profilePassword" src="images/profilePassword.png" />
        </div>
        <div className="logInForm">
          <h2>Username:</h2>
          <div className="inputHolder">
            <input
              type="email"
              onFocus={() => toggleOpacity("profileUsername")}
              onBlur={() => toggleOpacity("profileNormal")}
              required
            />
            <div className="palceholderBG"></div>
          </div>
          <h2>Password:</h2>
          <div className="inputHolder">
            <input
              type="password"
              onFocus={() => toggleOpacity("profilePassword")}
              onBlur={() => toggleOpacity("profileNormal")}
              required
            />
            <div className="palceholderBG"></div>
          </div>
          <button className="logInPageButton" type="submit">
            Log In
          </button>
        </div>
        <div className="belowForm">
          <p>Don't have one? Create Now:</p>
          <Link to={"/signup"}>
            <button className="logInPageButton">Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogInPageDesign;
