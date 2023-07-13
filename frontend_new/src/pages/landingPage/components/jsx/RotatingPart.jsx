import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RotatingPart = () => {
  const descriptions = ["Adventure", "Escape", "Quest", "Getaway", "Odyssey"];

  const [ShowId, setShowId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      ShowId === descriptions.length - 1 ? setShowId(0) : setShowId(ShowId + 1);
    }, 2495);

    return () => clearInterval(interval);
  }, [ShowId]);

  const animation = {
    x: ["0%"],
    y: ["-100%", "0%", "0%", "100%"],
    scale: [1],
    transition: {
      duration: 2.5,
      times: [0, 0.25, 0.75, 1],
      repeat: Infinity,
    },
  };

  return <motion.div animate={animation}>{descriptions[ShowId]}</motion.div>;
};

export default RotatingPart;
