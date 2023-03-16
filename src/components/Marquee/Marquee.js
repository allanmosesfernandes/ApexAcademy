import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import { MarqueeStyled,MarqueeContainer, Track, MarqueeText } from "./marquee.styles";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
        repeatType: "loop",
      },
      delay: 1, // add a delay of 1 second between loops
    },
  },

  
};


const Marquee = () => {
  return (
    <MarqueeContainer>
      <MarqueeStyled>
                {/* 3. Using framer motion */}
        <Track
          className="track"
          variants={marqueeVariants}
          animate="animate">
          <MarqueeText>
            Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values /             Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / Apex values /  Apex values /  Apex values /  Apex values /  Apex values /  Apex values / 
          </MarqueeText>
        </Track>
      </MarqueeStyled>
    </MarqueeContainer>
  );
};

export default Marquee;