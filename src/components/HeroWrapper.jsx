import { useState, useEffect } from "react";
import Hero from "./Hero";
import HeroMobile from "./HeroMobile";

const HeroWrapper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1350);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1350);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <HeroMobile /> : <Hero />;
};

export default HeroWrapper;
