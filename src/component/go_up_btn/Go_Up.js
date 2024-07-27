import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import "./Go_up.css";
export const GoUp = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", togglevisible);
  }, []);
  const togglevisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const goup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  const go_upfunc = () => {};
  return (
    <>
      {visible && (
        <div className="goup" onClick={goup}>
          <FontAwesomeIcon icon={faUpLong}></FontAwesomeIcon>
        </div>
      )}
    </>
  );
};
