import React, { useState } from "react";

import "./Donate.css";

const Donate = () => {
  const [scrolled, setScrolled] = useState(false);

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className={scrolled ? "scrolled-donate-section" : "donate-section"}>
      <div className="donate-wrapper">
        <h1>DONATE SECTION</h1>
      </div>
    </div>
  );
};

export default Donate;
