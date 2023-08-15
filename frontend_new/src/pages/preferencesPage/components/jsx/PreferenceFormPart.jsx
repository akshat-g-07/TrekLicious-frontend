import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/PreferenceFormPart.css";
import PreferenceQuestions from "../json/PreferenceQuestions.json";
import PrefFormQuestion from "./PrefFormQuestion";

const PreferenceFormPart = () => {
  const [prefState, setPrefState] = useState("NA");
  const [prefSeason, setPrefSeason] = useState("NA");
  const [prefDifficulty, setPrefDifficulty] = useState("NA");

  const [direction, setDirection] = useState();
  const [divIndex, setDivIndex] = useState(0);

  const variants = { enter: {}, center: {}, exit: {} };

  console.log(PreferenceQuestions[0]);

  return (
    <div
      style={{
        backgroundColor: "rgba(26,32,39,0.4)",
        marginTop: "30px",
        width: "100% ",
        borderRadius: "10px",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={divIndex}
          src={PreferenceQuestions[divIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 1 },
          }}
        >
          <PrefFormQuestion />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PreferenceFormPart;
