import React from 'react';
import "./Contact.css";

import { themeContext} from '../../Context';
import { useContext } from "react";


export default function Contact() {
  const theme =useContext(themeContext);
    const darkMode= theme.state.darkMode;

  return (
    <>
      <div className="contact_container">
        <div className="contact">
          <div className="contact_left">
            <span style={{color: darkMode ? 'white' :''}}>Get in Touch</span>
            <span>Contact Me</span>
          </div>
          <div className="contact_right">
            <form>
              <input
                type="text"
               className="user"
                name="user_name"
                placeholder="Name"
              />
              <input
                type="Email"
                className="user"
                name="user_email"
                placeholder="Email"
              />
              <textarea
                type="message"
                className="user"
                name="user_message"
                placeholder="Message"
              />
              <input type="submit" className=" form_button button" value="Send" />

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
