import React from "react";
import "./Footer.css";

import Wave from "../../img/wave.png";

import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";


function Footer() {
  return (
    <>
     <div className="footer">
    
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="footer-content">
        <span>25rohitkumar98@gmail.com</span>
        <div className="f-icons">
          <Instagram color="white" size={"3rem"} />
          <Linkedin color="white" size={"3rem"} />
          <Github color="white" size={"3rem"} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
