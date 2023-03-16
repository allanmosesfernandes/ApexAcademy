import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import { MarqueeStyled, Track, MarqueeText } from "./marquee.styles";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        duration: 500,
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
      <MarqueeStyled>
                {/* 3. Using framer motion */}
        <Track
          className="track"
          variants={marqueeVariants}
          animate="animate">
          <MarqueeText>Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. Our Values. </MarqueeText>
        </Track>
      </MarqueeStyled>
    </div>
  );
};

export default Marquee;