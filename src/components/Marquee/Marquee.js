import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./Marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        duration: 50,
        ease: "linear",
        repeatType: "loop",
      },
      delay: 1, // add a delay of 1 second between loops
    },
  },
};


const Marquee = () => {
  return (
    <div>
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.Our Values.</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;