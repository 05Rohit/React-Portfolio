import React from "react";
import Toogle from "../Toogle/Toogle";
import "./Navbar.css";
import { Link } from "react-scroll";

function navbar() {
  return (
    <>
      <div className="nav_section">
        <div className="nav-left">
          <div className="nav-name"> Rohit </div>
          <div>
            <Toogle />
          </div>
        </div>
        <div className="nav-right">
        <div className="nav-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="work" spy={true} smooth={true}>
                Work
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                  Experience
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button nav-button">Contact</button>
        </Link>
      </div>
      </div>
    </>
  );
}

export default navbar;
