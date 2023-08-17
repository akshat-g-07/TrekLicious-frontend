import PreferenceQuestions from "../json/PreferenceQuestions.json";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import React from "react";

const PrefFormQuestion = () => {
  const divIndex = 1;

  return (
    <div className="preferenceForm">
      <div className="question">{PreferenceQuestions[divIndex].question}</div>
      <div className="optionsHolder">
        {PreferenceQuestions[divIndex].options.map((option, index) => {
          return (
            <div className="option" key={index}>
              <ArrowDropDownCircleIcon id="optionIcon" /> <span>{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrefFormQuestion;
