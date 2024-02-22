import React from "react";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Purpleblur from "../../img/purpleblur.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Thumbup from "../../img/thumbup.png";
import Trown from "../../img/crown.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Boy from "../../img/boy.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { themeContext } from "../../Context";
import { useContext } from "react";


function Intro() {

  // Transition
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro-container">
      <div className=" Intro-left">
        <div className="Intro-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Rohit kumar</span>
          <span>
            Frontend Developer with some experience in web designing and
            development, producting in the Quality work.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
        </div>

        <div className="Inrto-Icon">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="Intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={Purpleblur} alt="" />
        <motion.img
          initial={{ left: "-26%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.img
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}

          src={Thumbup} alt=""
        />
        <motion.img
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "78%" }}
          transition={transition}
          src={Trown} alt="" />
      </div>
    </div>
  );
}

export default Intro;
