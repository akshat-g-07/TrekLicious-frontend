import React from "react";
import Button from "@mui/material/Button";
import "../css/ButtonDesign.css";

const ButtonDesign = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="outlined">Back</Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
          }}
        >
          <Button variant="text" style={{ color: "lightgray" }}>
            Skip
          </Button>
          <Button variant="contained">Next</Button>
        </div>
      </div>
    </>
  );
};

export default ButtonDesign;
