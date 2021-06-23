import React, { useEffect, useState } from "react";

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible &&
        <div onClick={scrollToTop} className="scroll-div">
          <img src='https://image.emojipng.com/900/12582900.jpg' alt='Go to top' className="scroll-img"/>
        </div>}
    </div>
  );
}

export default ScrollToTop;