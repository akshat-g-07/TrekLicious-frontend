import React from "react";
import StepperPart from "./StepperPart";
import PreferenceFormPart from "./PreferenceFormPart";
import ButtonDesign from "./ButtonDesign";

const PreferencePageDesign = () => {
  return (
    <div className="formHolderBG">
      <StepperPart />
      <PreferenceFormPart />
      <ButtonDesign />
    </div>
  );
};

export default PreferencePageDesign;
