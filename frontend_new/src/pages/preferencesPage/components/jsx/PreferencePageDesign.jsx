import React from "react";
import StepperPart from "./StepperPart";
import PreferenceFormPart from "./PreferenceFormPart";

const PreferencePageDesign = () => {
  return (
    <div className="formHolderBG">
      <StepperPart />
      <PreferenceFormPart />
    </div>
  );
};

export default PreferencePageDesign;
