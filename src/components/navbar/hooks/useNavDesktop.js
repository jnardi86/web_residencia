import React, { useEffect, useState } from "react";

const useNavDesktop = () => {
  const [alpha, setAlpha] = useState(0);

  var calcAlpha = 0;
  const SCROLL_BREAK = 1000;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        calcAlpha = window.scrollY;
        // console.log(calcAlpha);
        calcAlpha = 0 + (2 * calcAlpha) / SCROLL_BREAK;
        setAlpha(calcAlpha > 1 ? 1 : calcAlpha);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return {
    alpha,
  };
};

export default useNavDesktop;
