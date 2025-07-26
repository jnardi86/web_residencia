import React from "react";
import { Slide } from "react-awesome-reveal";

const AnimatedSection = ({ children, direction = "left" }) => {
  return (
    <Slide direction={direction} triggerOnce duration={2500}>
      <div className="w-full">{children}</div>
    </Slide>
  );
};

export default AnimatedSection;
