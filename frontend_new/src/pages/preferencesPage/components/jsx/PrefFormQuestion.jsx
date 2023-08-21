import React from "react";
import { motion } from "framer-motion";
import PreferenceQuestions from "../json/PreferenceQuestions.json";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../css/PrefFormQuestion.css";

const PrefFormQuestion = ({
  divIndex,
  prefState,
  prefSeason,
  prefDifficulty,
}) => {
  const optionDivClicked = (index) => {
    document.querySelector(".showCheckIcon") &&
      document.querySelector(".showCheckIcon") !=
        document.querySelectorAll(".checkIcon")[index] &&
      document
        .querySelector(".showCheckIcon")
        .classList.remove("showCheckIcon");

    document
      .querySelectorAll(".checkIcon")
      [index].classList.toggle("showCheckIcon");

    document.querySelector(".selectedOptionSpan") &&
      document.querySelector(".selectedOptionSpan") !=
        document.querySelectorAll(".optionSpan")[index] &&
      document
        .querySelector(".selectedOptionSpan")
        .classList.remove("selectedOptionSpan");

    document
      .querySelectorAll(".optionSpan")
      [index].classList.toggle("selectedOptionSpan");
  };

  return (
    <div className="preferenceForm">
      <div className="question">{PreferenceQuestions[divIndex].question}</div>
      <div className="optionsHolder">
        {PreferenceQuestions[divIndex].options.map((option, index) => {
          return (
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="option"
              key={index}
              onClick={() => {
                optionDivClicked(index);
              }}
            >
              <ArrowDropDownCircleIcon id="optionIcon" />

              {divIndex === 0 ? (
                <span
                  className={
                    option === prefState
                      ? "optionSpan selectedOptionSpan"
                      : "optionSpan"
                  }
                >
                  {option}
                </span>
              ) : divIndex === 1 ? (
                <span
                  className={
                    option === prefSeason
                      ? "optionSpan selectedOptionSpan"
                      : "optionSpan"
                  }
                >
                  {option}
                </span>
              ) : (
                <span
                  className={
                    option === prefDifficulty
                      ? "optionSpan selectedOptionSpan"
                      : "optionSpan"
                  }
                >
                  {option}
                </span>
              )}

              {divIndex === 0 ? (
                <CheckCircleIcon
                  className={
                    option === prefState
                      ? "checkIcon showCheckIcon"
                      : "checkIcon"
                  }
                />
              ) : divIndex === 1 ? (
                <CheckCircleIcon
                  className={
                    option === prefSeason
                      ? "checkIcon showCheckIcon"
                      : "checkIcon"
                  }
                />
              ) : (
                <CheckCircleIcon
                  className={
                    option === prefDifficulty
                      ? "checkIcon showCheckIcon"
                      : "checkIcon"
                  }
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PrefFormQuestion;
