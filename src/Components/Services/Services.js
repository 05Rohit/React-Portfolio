import React from "react";
import "./services.css";
import Glasses from "../../img/glasses.png";
import Heartemoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Resume from './Resume.pdf'

import Card from "./Card";
import { motion } from "framer-motion";

import { themeContext } from "../../Context";
import { useContext } from "react";

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2.5,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda et
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima beatae quidem possimus dolore, rerum nemo eveniet voluptates consequatur laborum, aut consectetur error qui voluptatibus et natus culpa nulla commodi ducimus.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        
      </div>

      {/* RIGHT SIDE OF THE SERVICES */}

      <div className="service-right">
        <div className="cards">
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "13.5rem" }}
            transition={transition}
          >
            <Card
              imgsrc={Humble}
              title={"UI/UX"}
              detail={
                "Lorem ispum dummy text are usually use in section where we need some random text"
              }
              color="rgba(252, 166, 31, 0.45)"
            />
          </motion.div>

          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
          >
            <Card
              imgsrc={Glasses}
              title={"Developer"}
              detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            />
          </motion.div>

          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          >
            <Card
              imgsrc={Heartemoji}
              title={"Design"}
              detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
          </motion.div>
         
        </div>
      </div>
    </div>
  );
}

export default Services;
