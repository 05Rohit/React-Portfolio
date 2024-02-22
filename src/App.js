import React, { useState, useEffect } from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Work from './Components/Work/Work';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';

import { themeContext } from './Context';
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 300)
  }, [])

  return (
    <div className="loader">
      {
        loading ? <Loader />
          :
          <div className="App"
            style={{
              background: darkMode ? 'black' : '',
              color: darkMode ? 'white' : ''
            }}
          >

            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Work />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
      }

    </div>

  );
}

export default App;
