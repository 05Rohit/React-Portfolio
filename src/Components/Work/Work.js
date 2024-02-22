import React from "react";
import "./Work.css";

import Facebook from "../../img/Facebook.png";
import Fiver from "../../img/fiverr.png";
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";

import { themeContext} from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";

function Work() {
  const theme =useContext(themeContext);
  const darkMode= theme.state.darkMode;

  return (
    <>
      <div className="work">
        <div className="work-container">
          <div className="work-left">
            <span style={{color: darkMode ? 'white' :''}}>Works for All these</span>
            <span>Brand & Clients</span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              natus dolor sapiente,
               nisi doloribus labore molestias veniam.
              Voluptatum et nemo, facere deleniti veniam sapiente distinctio
              cumque voluptatibus quia sint soluta eaque odit consequatur
              explicabo! Adipisci eos eius temporibus neque placeat.
            </span>
            <button className="button h-button">Hire Me</button>
          </div>

          {/* RIGHT SIDE OF THE WORKSECTION */ }

          
          <div className="work_right">
            <div className="work_design">
              <motion.div 
               initial={{ rotate: 45 }}
               whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
               transition={{ duration: 3.5, type: "spring" }}
               className="white_mcircle"
               >
                <div className="work_brand">
                  <div className="sec_circle">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="sec_circle">
                    <img src={Shopify} alt="" />
                  </div>
                  <div className="sec_circle">
                    <img src={Amazon} alt="" />
                  </div>
                  <div className="sec_circle">
                    <img src={Upwork} alt="" />
                  </div>
                  <div className="sec_circle">
                    <img src={Fiver} alt="" />
                  </div>
                
                  
                </div>
              </motion.div>
              <div className=" w_circle blue"> </div>
              <div className="w_circle yellow"> </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Work;
